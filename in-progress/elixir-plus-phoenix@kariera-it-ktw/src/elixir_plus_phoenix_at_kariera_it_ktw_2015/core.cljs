(ns ^:figwheel-always elixir-plus-phoenix-at-kariera-it-ktw-2015.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.framework :as f]
              [sablono.core :as sab :include-macros true])
    (:require-macros
     [elixir-plus-phoenix-at-kariera-it-ktw-2015.macros :refer [defslide]]))

(enable-console-print!)

(defonce app-state (atom {:counter 0
                          :internal-counter 0}))
(def slides-list [:intro
                  :whoami
                  :introduction-poll
                  :erlang-poll
                  :content
                  :other])

(defslide intro [_]
  [:div
   [:h1.huge.center.top-10 "Elixir + Phoenix"]
   [:div.center.top-5
    [:img.logo {:src "/images/elixir.png" :alt "Elixir logo."} nil]]
   [:div.center
    [:img {:src "/images/phoenix.png" :alt "Phoenix logo."} nil]]
   [:h5.right.top-5 "KarieraIT 2015 - Katowice"]
   [:h5.right.m-10 "Wojtek Gawroński"]
   [:h5.right "rspective, White Rook"]])

(defslide whoami [_]
  [:h2 "~ $ whoami"
   [:ul.no-list
    [:li [:h6 "Twitter: " [:em "@afronski"]]]
    [:li [:h6 "Github: " [:em "afronski"]]]]])


(defslide introduction-poll [_]
  [:div
   [:h1 "Participants poll"]
   [:ul
    [:li "How many of you heard about Erlang?"]
    [:li "How many of you heard about Elixir?"]
    [:li "How many of you heard about Functional Programming?"]]])

(defslide erlang-poll [_]
  [:div
   [:h1 "Erlang poll"]
   [:ul
    [:li "The same trick as on DWO 2015 with poll about Erlang VM."]]])

(defslide content [_]
  [:div
    [:h1 "Case Studies"]
    [:ul
     [:li "Erlang VM Demo (observer) - afronski/wolves-and-rabbits-world-simulation"]
     [:li "Speed wins the marketplace - asciinema (mix new, generators)"]
     [:li "Performance also! - asciinema (htop)"]
     [:li "Free lunch is over! - Concurrency, Distribution OOTB"]
     [:li "Stable foundation! - 30+ years of experience"]]])

(defslide other [_]
  [:div
   [:h3 "Topics"]
   [:ul.micro
          [:li "What is Elixir?"]
          [:li "Standing on the shouldres of giants"]
          [:li "Elevator pitch for Erlang VM / Elixir"
             [:ul
               [:li "Actor Model"]
               [:li "Concurrency Oriented language (analogy to physics"]
               [:li "Baked-in Distribution"]
               [:li "30+ years of experience"]
               [:li "Functional Language - Referential Transparency, Predictability"]
               [:li "Hygenic Macros"]]]
          [:li "What is Phoenix?"]
          [:li "Elevator pitch for Phoenix"
             [:ul
               [:li "Applications vs. Microservices"]
               [:li "Microservices done good in a 30+ years"]
               [:li "Easy for developers (Speed)"]
               [:li "Easy to deploy (Heroku Case)"]
               [:li "You are not sacrificing performance"]]]
          [:li "Stand-back a little bit"
             [:ul
               [:li "Web world analogy to Telecom"]]]
          [:li "Project kick-off"
             [:ul
               [:li "asciinema FTW!"]]]
          [:li "Creating a chat"]
          [:li "What besides Phoenix?"
             [:ul
               [:li "Ecto"]
               [:li "Clients for C#, Java, ObjC and Swift"]]]
          [:li "What's next?"
             [:ul
               [:li "Books (Programming Elixir, Introducing Elixir, Elixir Metaprogramming)"]
               [:li "Books (Learn You Some Erlang!)"]
               [:li "Blogs"]
               [:li "Learn by doing it"]]]]])

(defn ^:export main []
  (f/presentation-init app-state)

  (om/root
   (f/presentation-root slides-list)
   app-state
   {:target (. js/document (getElementById "app"))}))
