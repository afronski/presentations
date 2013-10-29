(function() {
  "use strict";

  // Constants and Variables.
  var RingsAmount = 5,
      ImagesPerRing = 12,

      ReelRadius = 200,
      SlotAngle = 360 / ImagesPerRing,

      MaximumRingVelocity = 8.0,
      MinimumRingVelocity = 2.0,

      MinimalRingVelocity = 2.0,

      DelayInFramesForEachRing = 10,
      BrakingVelocity = 0.5,
      Friction = 0.01,

      MinimumSpinDurationInSteps = 200,
      MaximumSpinDurationInSteps = 500,

      HiddenClassName = "hidden",

      requestAnimationFrame,
      machine;

  // Utilities
  function run (method) {
    return function (element) {
      return element[method]();
    };
  }

  function runWith (method, first) {
    return function (element) {
      return element[method](first);
    };
  }

  function format (string, input) {
    var key;

    for(key in input) {
      if (input.hasOwnProperty(key)) {
        string = string.replace("%" + key + "%", input[key].toString());
      }
    }

    return string;
  }

  function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  function convertToCssCamelCaseProperty (cssPropertyName) {
    return cssPropertyName.split("-").map(capitalize).join("");
  }

  function setStyleWithVendorPrefix (vendor, element, name, value) {
    element.style[vendor + convertToCssCamelCaseProperty(name)] = value;
  }

  function setStyle (element, name, value) {
    setStyleWithVendorPrefix("webkit", element, name, value);
    setStyleWithVendorPrefix("moz", element, name, value);
    setStyleWithVendorPrefix("ms", element, name, value);

    element.style[name] = value;
  }

  function getStyleWithVendorPrefix (vendor, element, name) {
    return element.style[vendor + convertToCssCamelCaseProperty(name)];
  }

  function getStyle (element, name) {
    return element.style[name] || getStyleWithVendorPrefix("webkit", element, name) ||
           getStyleWithVendorPrefix("moz", element, name) || getStyleWithVendorPrefix("ms", element, name);
  }

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  // Prototypes.
  function Slot (parent, slotNumber) {
    var actualSlotAngle = SlotAngle * slotNumber,
        slot;

    if (!(this instanceof Slot)) {
      return new Slot(parent, slotNumber);
    }

    // Private implementation.
    function createSlot (parent, slotNumber) {
      var value,
          content;

      slot = document.createElement("div");
      slot.className = "slot";

      value = format("rotateX(%x%deg) translateZ(%z%px)", { x: actualSlotAngle, z: ReelRadius });
      setStyle(slot, "transform", value);

      content = slot.appendChild(document.createElement("p"));
      content.textContent = slotNumber + 1;

      parent.appendChild(slot);
    }

    // Public API.
    this.spin = function (ringVelocity) {
      if (slot) {
        actualSlotAngle -= ringVelocity;
        setStyle(slot, "transform", format("rotateX(%x%deg) translateZ(%z%px)", { x: actualSlotAngle, z: ReelRadius }));
      }
    };

    this.getAngle = function () {
      return Math.round(parseFloat(/rotateX\((\-?\d+(?:\.\d+)?)deg\)/gi.exec(getStyle(slot, "transform"))[1])) % 360;
    };

    this.isOnEndingPositon = function () {
      var angle = Math.abs(this.getAngle());

      return (angle === 0 || angle === 360);
    };

    // Initialization.
    createSlot(parent, slotNumber);

    return this;
  }

  function Ring (ringNumber) {
    var slots = [],
        velocity,
        ring = document.getElementById("ring-" + ringNumber.toString()),
        braking = false,
        stopped = false;

    if (!(this instanceof Ring)) {
      return new Ring(ringNumber);
    }

    // Private implementation.
    function fillRing (ringNumber) {
      var i;

      for (i = 0; i < ImagesPerRing; i ++) {
        slots.push(new Slot(ring, i));
      }

      setStyle(ring, "transform", format("translateX(%x%px) translateY(%y%px)", { x: -ReelRadius, y: ReelRadius }));
    }

    // Public API.
    this.spin = function () {
      if (!braking && velocity - Friction > MinimalRingVelocity) {
        velocity -= Friction;
      }

      slots.forEach(runWith("spin", velocity));
    };

    this.init = function () {
      braking = false;
      stopped = false;

      velocity = Math.max(MinimumRingVelocity, Math.random() * MaximumRingVelocity);
    };

    this.brake = function () {
      if (!braking && !stopped) {
        braking = true;
        stopped = false;

        velocity = BrakingVelocity;
      }

      if (braking && !stopped) {
        this.spin();
      }
    };

    this.anySlotOnEndingPositon = function () {
      if (!stopped) {
        stopped = slots.filter(run("isOnEndingPositon")).length > 0;
      }

      return stopped;
    };

    // Initialization.
    fillRing(ringNumber);

    return this;
  }

  function SlotMachine () {
    var rings = [],
        machineStopped = false,
        started,
        steps,
        startTime,
        randomStepsAmount;

    if (!(this instanceof SlotMachine)) {
      return new SlotMachine();
    }

    // Private implementation.
    function clear () {
      steps = 0;
      started = false;
      startTime = null;
      randomStepsAmount = null;
      machineStopped = false;
    }

    function spinWhen (ring, index) {
      if (steps > index * DelayInFramesForEachRing) {
        ring.spin();
      }
    }

    function toggleButton () {
      var button = document.getElementById("start-spinning");

      if (button.classList.contains(HiddenClassName)) {
        button.classList.remove(HiddenClassName);
      } else {
        button.classList.add(HiddenClassName);
      }
    }

    function step () {
      ++steps;

      if (steps < randomStepsAmount) {
        rings.forEach(spinWhen);
      } else {
        rings.forEach(run("brake"));
        machineStopped = rings.filter(run("anySlotOnEndingPositon")).length === rings.length;
      }

      if (!machineStopped) {
        requestAnimationFrame(step);
      } else {
        clear();
        toggleButton();
      }
    }

    function initRings () {
      var i;

      for(i = 1; i <= RingsAmount; ++i) {
        rings.push(new Ring(i.toString()));
      }
    }

    // Public API.
    this.spin = function () {
      steps = 0;
      started = true;

      startTime = Date.now();
      randomStepsAmount = Math.max(MinimumSpinDurationInSteps, ~~(Math.random() * MaximumSpinDurationInSteps));

      toggleButton();
      rings.forEach(run("init"));

      requestAnimationFrame(step);
    };

    // Initialization.
    clear();
    initRings();

    return this;
  }

  // Initalization functions.
  function attachEvents () {
    document.getElementById("start-spinning").addEventListener("click", machine.spin.bind(machine));
  }

  function init () {
    machine = new SlotMachine();
    attachEvents();
  }

  init();

} ());