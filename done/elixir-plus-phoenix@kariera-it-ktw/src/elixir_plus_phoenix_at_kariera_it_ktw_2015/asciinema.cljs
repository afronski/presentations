(ns ^:figwheel-always elixir-plus-phoenix-at-kariera-it-ktw-2015.asciinema)

(defn load [id parent]
  (let [script (. js/document (createElement "script"))]
    (.setAttribute script "type" "text/javascript")
    (.setAttribute script "async" true)
    (.setAttribute script "id" (str "asciicast-" id))
    (.setAttribute script "src"  (str "https://asciinema.org/a/" id ".js"))
    (.setAttribute script "data-theme" "solarized-light")
    (.appendChild parent script)))
