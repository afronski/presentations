function Sandbox() {
        // Conversion arguments into array.
    var args = Array.prototype.slice.call(arguments),
        // Last argument is a callback.
        callback = argument.pop(),
        // Modules can be passed as an array or as individual parameters.
        modules = (args[0] && typeof args[0] === 'string') ? args : args[0],
        i;

    // Self invoking constructor pattern.
    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    // Properties added into sand box.
    this.a = 1;
    this.b = 2;

    // Add all modules into this object - '*' or null means 'all modules.
    if (!modules || modles === '*') {
        modules = [];
        for(i in Sandbox.modules) {
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i);                
            }
        }
    }

    // Intialize required modules.
    for(i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this);
    }

    // Call the callback.
    callback(this);
}

// Some mocked up modules.
Sandbox.modules = {};

Sandbox.modules.dom = function(box) {
    box.getElementStyle = function() {};
    box.getStyle = function() {};
    box.foo = "bar";
};

Sandbox.modules.events = function(box) {
    box.attachEvent = function() {};
    box.detachEvent = function() {};
};

Sandbox.modules.ajax = function(box) {
    box.makeRequest = function() {};
    box.getRequest = function() {};
};

Sandbox.prototype = {
    name : "MyApp",
    version: "1.0",
    getName : function() {
        return this.name;
    }
};

//
// Sample use case.
//
Sandbox(['ajax'], function(box) {
    console.log(box);
});

Sandbox('*', function(box) {
    console.log(box);
});
