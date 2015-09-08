(ns ^:figwheel-always elixir-plus-phoenix-at-kariera-it-ktw-2015.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.framework :as f]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.gist :as gist]
              [sablono.core :as sab :include-macros true])
    (:require-macros
     [elixir-plus-phoenix-at-kariera-it-ktw-2015.macros :refer [defslide]]))

(enable-console-print!)

(def slides-list [:intro
                  :whoami
                  :introduction-poll
                  :erlang-familiarity-poll
                  :why
                  :free-lunch-is-over
                  :impression
                  :foundation-and-similarities
                  :ok-but-why-not-ruby-nor-rails
                  :scaling-and-performance
                  :elixir-example
                  :phoenix
                  :case-study
                  :next-steps
                  :thank-you])

(defonce app-state (atom {:counter 0
                          :internal-counter 0
                          :max-internal-counter 6
                          :max-counter (count slides-list)}))

(defslide intro [_]
  [:div
   [:h1.huge.center.top-10 "Elixir + Phoenix"]
   [:div.logos
    [:img {:src "/images/elixir.png" :alt "Elixir logo."}]
    [:img {:src "/images/phoenix.png" :alt "Phoenix logo."}]]
   [:h5.right.top-5 "KarieraIT 2015 - Katowice"]
   [:h5.right.mt-10 "Wojtek Gawroński"]
   [:h5.right "rspective, White Rook"]])

(defslide whoami [_]
  [:div
   [:h1.huge.center.top-10 [:code "~ $ whoami" ]]
   [:div.company.logos
    [:img {:src "/images/rspective.png" :alt "rspective logo."}]
    [:img {:src "/images/WhiteRook.jpg" :alt "White Rook logo."}]]
   [:ul.no-list.right
    [:li [:h4 [:strong "Twitter: "] [:em "@afronski"]]]
    [:li [:h4 [:strong "Github: "] [:em "afronski"]]]]])

(defslide introduction-poll [_]
  [:div
   [:h1.huge.center.top-25 "Who are you?"]
   [:ul.notes
    [:li "Developers?"]
    [:li "Functional programming?"]
    [:li "Erlang?"]
    [:li "Elixir?"]]])

(defslide erlang-familiarity-poll [state]
  [:div
   [:h1.huge.center.top-10 "Erlang anyone?"]
   [:ul.no-list
    (f/on 1 state [:li "Who has played Call of Duty?"])
    (f/on 2 state [:li "Who has played League of Legends?"])
    (f/on 3 state [:li "Who has ever used " [:em "Facebook"] " chat?"])
    (f/on 4 state [:li "Who has ever used " [:em "WhatsApp"] "?"])
    (f/on 5 state [:li "Who has ever used data transfer on mobile?"])]
   [:ul.notes
    [:li "Please rise your hand and keep it in the air till the end."]
    [:li "Take a look around how many of you actually meet one way or another an Erlang based system."]]])

(defslide why [_]
  [:h1.huge.center.top-25 "Why should I care?"])

(defslide free-lunch-is-over [_]
  [:div
   [:h1.huge.center.mt-30.mb-10 "Free lunch is over!"]
   [:a {:href "https://en.wikipedia.org/wiki/Amdahl%27s_law" :target "_blank"}
    [:img.image {:src "/images/AmdahlsLaw.svg" :alt "Amdahl's Law"}]]
   [:ul.notes
    [:li "Multi and manycore is literally here."]
    [:li "How hard is to build multithreaded and concurrent systems?"]
    [:li "Leaking abstractions (Event Loop, Promises, CSP etc.)"]]])

(defslide impression [_]
  [:div
   [:h1.huge.center.top-10 "Functional Programming"]
   [:h1.huge.center.mb-30 "Actor Model"]
   [:h2.center "Metaprogramming"]
   [:h2.center "Developer " [:em "Happiness"]]
   [:ul.notes
    [:li "Referential Transparency, Predictability, Immutability"]
    [:li "Hygenic Macros"]
    [:li "'I loved things which I have seen, and I hated things there weren't there'"]]])

(defslide foundation-and-similarities [_]
  [:div
   [:h1.huge.center.mt-30 "30+ years of engineering!"]
   [:h2.center.mb-30 "1982 - " [:a {:href "http://www.erlang.org/course/history.html" :target "_blank"} "History"]]
   [:img.image {:src "/images/TelecomAnalogy.png" :alt "Analogy of the web to telecom industry."}]
   [:ul.notes
    [:li "It is impossible to talk about Elixir without talking about Erlang."]
    [:li "BEAM ecosystem - Standing on the shoulders of giant."]
    [:li "Why we should care about telecom? Well, it is our use case."]
    [:li "If we have Erlang, why we need to build something else?"]]])

;; TODO

(defslide ok-but-why-not-ruby-nor-rails [_]
  [:div
   [:ul
    [:li "Meh, we have got it already (Django, Rails etc.)"]
    [:li "No, you don't. How hard is to build scalable web app in Rails?"]
    [:li "How hard is to do a real-time communication in those frameworks?"]
    [:li "How hard is to distribute them across multiple machines?"]]])

(defslide scaling-and-performance [_]
  [:div
   [:ul
    [:li "Microservices for the rescue!"]
    [:li "Yes, but ... what about operational costs? Do you have DevOps culture?"]
    [:li "Instead look at the highest level of Erlang/Elixir systems."]
    [:li "We have applications. It means that Erlang was built 30 years ago with microservices in mind."]
    [:li "Baked in Concurrency (in the langauge) and Distribution (in the platform)."]]])

(defslide elixir-example [_]
  [:div
   [:h1.huge.center "Example"]
   [:div {:id "ee4aa647fc5cc341ada9" :class "gist" :data-language "elixir"} nil]])

(defslide phoenix [_]
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

(defslide case-study [_]
  [:div
    [:h1 "Case Studies"]
    [:ul
     [:li "Erlang VM Demo (observer) - afronski/wolves-and-rabbits-world-simulation"]
     [:li "Speed wins the marketplace - asciinema (mix new, generators)"]
     [:li "Performance also! - asciinema (htop)"]
     [:li "Free lunch is over! - Concurrency, Distribution OOTB"]
     [:li "Stable foundation! - 30+ years of experience"]]])

(defslide next-steps [_]
   [:div
    [:h2 "What's next?"]
    [:ul
     [:li "Books (Programming Elixir, Introducing Elixir, Elixir Metaprogramming)"]
     [:li "Books (Learn You Some Erlang!)"]
     [:li "Silesian BEAMers - we're starting!"]
     [:li "Blogs"]
     [:li "Learn by doing it"]]])

(defslide thank-you [_]
  [:h1.huge.center.top-25 "Thank you!"])

(defn ^:export main []
  (f/presentation-init app-state)

  (om/root
   (f/presentation-root slides-list)
   app-state
   {:target (. js/document (getElementById "app"))})

  (doseq [parent (seq (. js/document (querySelectorAll ".gist")))]
    (let [id (.-id parent)]
      (gist/load (str "https://api.github.com/gists/" id)
                 (gist/highlight parent)))))
