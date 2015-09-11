(ns ^:figwheel-always elixir-plus-phoenix-at-kariera-it-ktw-2015.framework
    (:require [om.core :as om :include-macros true]
              [sablono.core :as sab :include-macros true]))

;; Converting NodeList to ISeqable.

(extend-type js/NodeList
  ISeqable
  (-seq [array] (array-seq array 0)))

;; Helpers and Notes.

(defn color-log [message color]
  (js/console.log (str "%c" message) (str "color:" color ";font-weight:bold;")))

(defn print-notes [slide-number]
  (let [n        (+ slide-number 1)
        selector (str ".slide:nth-child(" n ") .notes li")]
    (js/console.clear)
    (doseq [li (. js/document (querySelectorAll selector))]
      (color-log (.-innerText li) "green"))))

(defn for-all-nodes [selector handler]
  (doseq [parent (seq (. js/document (querySelectorAll selector)))]
    (let [id (.-id parent)] (handler id parent))))

;; Slides movement.

(defn go-to-slide [n slides-list app-state]
  (print-notes n)
  (swap! app-state
         assoc
         :counter n
         :internal-counter 0
         :max-counter (count slides-list)))

(defn go-to-hash [app-state slides-list]
  (let [slide (int (subs js/document.location.hash 1))]
    (go-to-slide slide slides-list app-state)))

(defn set-hash [n]
  (set! js/document.location.hash n))

(defn refresh-current-slide [app-state slides-list]
  (let [n (:counter @app-state)]
    (go-to-slide n slides-list app-state)
    (set-hash n)))

(defn restore-slides-from-hash [app-state slides-list]
  (if (not (empty? js/document.location.hash))
    (go-to-hash app-state slides-list)
    (refresh-current-slide app-state slides-list)))

;; Slides multimethods.

(defmulti slide (fn [a] a))

(defmethod slide :default [_]
  (sab/html [:div "empty"]))

;; Rendering helpers.

(defn section [slide-name state position content]
  (sab/html
   [:section
    {:style {:transform (str "translateX(" (* 960 position) "px)")}
     :key slide-name
     :className "slide bg-color"}
    content]))

(defn translate [data]
  (str " translateX(" (* -960 (:counter data)) "px)"))

(defn slider [data slides-list]
  (sab/html
   [:article.slides
    [:div.slide-world {:style {:transform-origin (str (* 960 (:counter data)) "px 300px")
                               :transform (translate data)}}
     (map-indexed #(slide %2 data %1) slides-list)]]))

;; Rendering helpers.

(defn on [num state content]
  (if (>= (:internal-counter state) num)
    content
    [:span]))

(defn only [num state content]
  (if (= (:internal-counter state) num)
    content
    [:span]))

;; Keyboard handler and dispatch.

(def dispatch-map {32 :advance
                   39 :advance
                   40 :internal-advance
                   38 :internal-back
                   37 :back})

(defmulti dispatch identity)

(defmethod dispatch :advance [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x     (:counter state)
                        mx    (- (:max-counter state) 1)
                        value (if (= x mx) x (inc x))]
                    (print-notes value)
                    (set-hash value)
                    (assoc state
                           :internal-counter 0
                           :counter value)))))

(defmethod dispatch :internal-advance [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x     (:internal-counter state)
                        mx    (- (:max-internal-counter state) 1)
                        value (if (= x mx) x (inc x))]
                    (assoc state :internal-counter value)))))

(defmethod dispatch :internal-back [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x     (:internal-counter state)
                        value (if (zero? x) 0 (dec x))]
                    (assoc state :internal-counter value)))))

(defmethod dispatch :back [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x     (:counter state)
                        value (if (zero? x) 0 (dec x))]
                    (print-notes value)
                    (set-hash value)
                    (assoc state :counter value)))))

(defn dispatch! [state action]
  (dispatch action (om/root-cursor state)))

(defn key-handler [state event]
  (when-let [action (get dispatch-map (.-keyCode event))]
    (dispatch! state action)))

;; Presentation helpers.

(defn presentation-root [slides-list]
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (sab/html
         [:main {:className "bg-color"}
          (slider data slides-list)])))))

(defn presentation-init [state]
  (.addEventListener
   (.-body js/document) "keyup" (fn [event] (key-handler state event))))
