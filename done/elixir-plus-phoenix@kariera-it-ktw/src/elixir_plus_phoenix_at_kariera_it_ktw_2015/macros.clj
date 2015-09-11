(ns elixir-plus-phoenix-at-kariera-it-ktw-2015.macros)

(defmacro defslide [slide-name bindings body]
  `(defmethod f/slide ~(keyword slide-name) [_# state# position#]
     (let [~bindings [state#]]
       (f/section ~(name slide-name) state# position#
                  (sab/html ~body)))))
