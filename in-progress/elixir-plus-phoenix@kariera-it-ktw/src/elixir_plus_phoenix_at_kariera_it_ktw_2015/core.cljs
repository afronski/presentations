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
    [:li "Companies and Logos"]
    [:li "Quick introduction and building authority (polyglot programmer)"]
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
    [:li "The same trick as on DWO 2015 with poll about Erlang VM. ;)"]]])

(defslide why [_]
  [:div
   [:ul
    [:li "Free lunch is over!"]
    [:li "Multi and manycore is here."]
    [:li "How hard is to build multithreaded and concurrent systems?"]
    [:li "Leaking abstractions (Event Loop, Promises, CSP etc.)"]]])

(defslide foundation [_]
  [:div
   [:ul
    [:li "Erlang - 30+ years of engineering"]
    [:li "It is impossible to talk about Elixir without talking about Erlang."]
    [:li "BEAM ecosystem - Standing on the shoulders of giants"]
    [:li "Why we should care about telecom? Well, it is our use case."]
    [:li "If we have Erlang, why we need to build something else?"]]])

(defslide impressions [_]
  [:div
   [:ul
    [:li "Functional Language - Referential Transparency, Predictability, Immutability"]
    [:li "Developer Happiness"]
    [:li "'I loved things which I have seen, and I hated things there weren't there'"]
    [:li "Metaprogramming - Hygenic Macros"]
    [:li "Last, but not least - Syntax"]]])

(defslide ok-but-why-not-ruby-nor-rails [_]
  [:div
   [:ul
    [:li "Meh, we have got it already (Django, Rails etc.)"]
    [:li "No, you don't. How hard is to build scalable web app in Rails?"]
    [:li "How hard is to do a real-time communication in those frameworks?"]
    [:li "How hard is to distribute them across multiple machines?"]]])

(defslide microservices-are-the-answer [_]
  [:div
   [:ul
    [:li "Microservices for the rescue!"]
    [:li "Yes, but ... what about operational costs? Do you have DevOps culture?"]
    [:li "Instead look at the highest level of Erlang/Elixir systems."]
    [:li "We have applications. It means that Erlang was built 30 years ago with microservices in mind."]
    [:li "Baked in Concurrency (in the langauge) and Distribution (in the platform)."]]])

(defslide what-is-in-the-box [_]
  [:div
   [:ul
    [:li "Who doesn't like physics?"]
    [:li "How important physics is for the computer science? A lot - entrophy, information equations etc."]
    [:li "Actor Model is a physical world analogy for concurrency inside computers."]]])

(defslide demos [_]
  [:div
    [:h1 "Case Studies"]
    [:ul
     [:li "Erlang VM Demo (observer) - afronski/wolves-and-rabbits-world-simulation"]
     [:li "Speed wins the marketplace - asciinema (mix new, generators)"]
     [:li "Performance also! - asciinema (htop)"]
     [:li "Free lunch is over! - Concurrency, Distribution OOTB"]
     [:li "Stable foundation! - 30+ years of experience"]]])

(defslide elixir-and-phoenix [_]
  [:div
   [:h3 "Topics"]
   [:ul.micro
    [:li "What is Elixir?"]
    [:li "What is Phoenix?"]
    [:li "Elevator pitch for Phoenix"
     [:ul]
     [:li "Easy for developers (Speed)"]
     [:li "Easy to deploy (Heroku Case)"]
     [:li "You are not sacrificing performance"]]]
   [:li "Project kick-off"
    [:ul
     [:li "asciinema FTW!"]]]
   [:li "Creating a chat (very easy)"]
   [:li "What besides Phoenix?"
    [:ul
     [:li "Ecto"]
     [:li "Client libraries for C#, Java, ObjC and Swift"]]]])

(defslide whats-next [_]
   [:div
    [:h2 "What's next?"]
    [:ul
     [:li "Books (Programming Elixir, Introducing Elixir, Elixir Metaprogramming)"]
     [:li "Books (Learn You Some Erlang!)"]
     [:li "Silesian BEAMers - we're starting!"]
     [:li "Blogs"]
     [:li "Learn by doing it"]]])

(defn ^:export main []
  (f/presentation-init app-state)

  (om/root
   (f/presentation-root slides-list)
   app-state
   {:target (. js/document (getElementById "app"))}))
