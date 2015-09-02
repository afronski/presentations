(ns ^:figwheel-always elixir-plus-phoenix-at-kariera-it-ktw-2015.framework
    (:require [om.core :as om :include-macros true]
              [sablono.core :as sab :include-macros true]))

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
     :className "bg-color"}
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
                  (let [x (:counter state)]
                    (assoc state
                           :internal-counter 0
                           :counter (inc x))))))

(defmethod dispatch :internal-advance [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x (:internal-counter state)]
                    (assoc state :internal-counter (inc x))))))

(defmethod dispatch :internal-back [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x (:internal-counter state)]
                    (assoc state :internal-counter
                           (if (zero? x) 0 (dec x)))))))

(defmethod dispatch :back [_ data]
  (om/transact! data []
                (fn [state]
                  (let [x (:counter state)]
                    (assoc state
                           :counter
                           (if (zero? x) 0 (dec x)))))))

(defn dispatch! [state action]
  (dispatch action (om/root-cursor state)))

(defn key-handler [state event]
  (println state)
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
