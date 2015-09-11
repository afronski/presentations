(ns elixir-plus-phoenix-at-kariera-it-ktw-2015.gist
  (:import [goog.net Jsonp]
           [goog Uri]))

(defn load [url success]
  (let [jsonp (goog.net.Jsonp. (Uri. url))]
    (.send jsonp nil
           (fn [response]
             (let [data (get (js->clj response) "data")
                   files (get data "files")
                   filename (first (first files))]
               (success (get (get files filename) "content"))))
           (fn [err]
             (js/console.error err)))))

(defn highlight [parent]
  (fn [src]
    (let [pre (. js/document (createElement "pre"))
          code (. js/document (createElement "code"))
          text (. js/document (createTextNode src))
          id (.-id parent)
          lang (.getAttribute parent "data-language")]

      (set! (.-className code) (str "language-" lang))
      (set! (.-className pre) "line-numbers")

      (.appendChild code text)
      (.appendChild pre code)
      (.appendChild parent pre)

      (.highlightElement js/Prism code false
                         (fn [] (js/console.info "Gist with" id "highlighted!"))))))
