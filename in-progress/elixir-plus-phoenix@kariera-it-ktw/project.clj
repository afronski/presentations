(defproject elixir-plus-phoenix-at-kariera-it-ktw-2015 "0.1.0"
  :description "Elixir + Phoenix - Presentation for KarieraIT in Katowice (2015)"
  :url "http://careercon.pl/konferencja/kariera-it-katowice-12-09-2015/"
  :license {:name "MIT"
            :url "http://opensource.org/licenses/MIT"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3297"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [sablono "0.3.4"]
                 [org.omcljs/om "0.9.0"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.5"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]

              :figwheel { :on-jsload "elixir-plus-phoenix-at-kariera-it-ktw-2015.core/on-js-reload" }

              :compiler {:main elixir-plus-phoenix-at-kariera-it-ktw-2015.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/elixir_plus_phoenix_at_kariera_it_ktw_2015.js"
                         :output-dir "resources/public/js/compiled/out"
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/elixir_plus_phoenix_at_kariera_it_ktw_2015.js"
                         :main elixir-plus-phoenix-at-kariera-it-ktw-2015.core
                         :optimizations :advanced
                         :pretty-print false}}]}

  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources"
             ;; :server-port 3449 ;; default
             ;; :server-ip "127.0.0.1"

             ;; watch and update CSS
             :css-dirs ["resources/public/css"]

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             :open-file-command "e"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log"
             })
