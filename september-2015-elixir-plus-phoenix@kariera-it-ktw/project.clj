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
              :source-paths ["src", "dev"]
              :figwheel { :on-jsload "elixir-plus-phoenix-at-kariera-it-ktw-2015.core/reload-on-changes" }
              :compiler {:main elixir-plus-phoenix-at-kariera-it-ktw-2015.core
                         :asset-path "js/compiled/out"
                         :output-to "resources/public/js/compiled/elixir_plus_phoenix_at_kariera_it_ktw_2015.js"
                         :output-dir "resources/public/js/compiled/out"
                         :source-map-timestamp true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/elixir_plus_phoenix_at_kariera_it_ktw_2015.js"
                         :main elixir-plus-phoenix-at-kariera-it-ktw-2015.core
                         :optimizations :whitespace
                         :pretty-print false}}]}

  :figwheel {:css-dirs ["resources/public/css"]
             :open-file-command "e"})
