(ns elixir-plus-phoenix-at-kariera-it-ktw-2015.core
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.framework :as f]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.gist :as gist]
              [elixir-plus-phoenix-at-kariera-it-ktw-2015.asciinema :as asciinema]
              [sablono.core :as sab :include-macros true])
    (:require-macros
     [elixir-plus-phoenix-at-kariera-it-ktw-2015.macros :refer [defslide]]))

(enable-console-print!)

(def slides-list [:intro
                  :whoami
                  :introduction-poll
                  :erlang-familiarity-poll
                  :why
                  :why-not-ruby-nor-rails
                  :free-lunch-is-over
                  :how-to-tame-concurrency
                  :scaling-and-performance
                  :foundation-and-similarities
                  :elixir
                  :elixir-example
                  :phoenix
                  :phoenix-example
                  :demo
                  :next-steps
                  :thank-you
                  :resources])

(defonce app-state (atom {:counter 0
                          :internal-counter 0
                          :max-internal-counter 6
                          :max-counter (count slides-list)}))

(defslide intro [_]
  [:div
   [:h1.huge.center.top-10 "Elixir + Phoenix"]
   [:div.logos
    [:img {:src "images/elixir.png" :alt "Elixir logo."}]
    [:img {:src "images/phoenix.png" :alt "Phoenix logo."}]]
   [:h5.right.top-5 "KarieraIT 2015 - Katowice"]
   [:h5.right.mt-10 "Wojtek Gawroński"]
   [:h5.right "rspective, White Rook"]])

(defslide whoami [_]
  [:div
   [:h1.huge.center.top-10 [:code "~ $ whoami" ]]
   [:div.company.logos
    [:img {:src "images/rspective.png" :alt "rspective logo."}]
    [:img {:src "images/WhiteRook.jpg" :alt "White Rook logo."}]]
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
  [:div
   [:h1.huge.center.top-25 "Why should I care?"]
   [:ul.notes
    [:li "Short on time, so two main things can be taken from that presentation"]
    [:li "Why?"]
    [:li "How I can start and learn more?"]]])

(defslide why-not-ruby-nor-rails [state]
  [:div
   [:h1.huge.center.top-10 "We have " [:em "Rails"] ", " [:em "Django"] ", " [:em "Node.js"] "..."]
   (f/on 1 state [:h2.center.mt-10 "Could your " [:em "technology"] " do one of this?"])
   [:ul.no-list
    (f/on 2 state [:li "Ability to fully utilize 10 cores with " [:em "hyperthreading"]])
    (f/on 3 state [:li "Scale your application to ~70 million users"])
    (f/on 4 state [:li "2+ million connections per server"])
    (f/on 5 state [:li "Manageable by ~10 people " [:em "(development and operations)"]])]
   [:ul.notes
    [:li "How hard is to build scalable web app in aforementioned frameworks?"]
    [:li "How hard is to do a real-time communication in those frameworks?"]
    [:li "How hard is to distribute them across multiple machines?"]
    [:li "Creator of Elixir - Jose Valim - worked on that problem as a Rails core team member."]
    [:li "If one of mentioned is not your problem - keep going, there is nothing wrong with that."]
    [:li "However, I would like to show you that there is a slight issue here."]]])

(defslide free-lunch-is-over [_]
  [:div
   [:h1.huge.center.mt-30.mb-10 "Free lunch is over!"]
   [:a {:href "https://en.wikipedia.org/wiki/Amdahl%27s_law" :target "_blank"}
    [:img.image {:src "images/AmdahlsLaw.svg" :alt "Amdahl's Law"}]]
   [:ul.notes
    [:li "Multi and manycore is literally here."]
    [:li "How hard is to build multithreaded and concurrent systems?"]
    [:li "Leaking abstractions (Event Loop, Promises, CSP etc.)"]
    [:li "If you do not want remain a legacy system maintainer, you need to be ready for that."]
    [:li "What if I'll show you technology which is built around that concept?"]
    [:li "What if I'll tell you that technology has support for multi-core since 2005 (since the beginning)?"]]])

(defslide how-to-tame-concurrency [state]
  [:div.center
   [:a {:href "https://mitpress.mit.edu/sicp/full-text/book/book.html"}
    [:img {:src "images/SICPCover.jpg" :alt "Structure and Interpretation of Computer Programs - Cover"}]]
   [:h1.huge "Functional Programming"]
   (f/on 1 state [:h1.huge.mb-30 "Actor Model"])
   (f/on 2 state [:h2 "Metaprogramming"])
   (f/on 3 state [:h2 "Developer " [:em "Happiness"]])
   [:ul.notes
    [:li "Concurrency and distribution is hard because of certain style of thinking which is dominating right now."]
    [:li "A language that doesn't affect the way you think about programming, is not worth knowing. - Alan Perlis"]
    [:li "Referential Transparency, Predictability, Immutability"]
    [:li "Hygenic Macros"]
    [:li "'I loved things which I have seen, and I hated things there weren't there' - Jose Valim"]
    [:li "Asymilating good ideas from other communities."]]])

(defslide scaling-and-performance [state]
  [:div.center
   [:h1.huge.top-10.mb-30 "Microservices to the rescue?"]
   [:h2.mb-30 "Well, not " [:em "always"] "..."]
   (f/on 1 state [:img {:src "images/DistributedSystem.png" :alt "Microservices done right."}])
   [:ul.notes
    [:li "Yes, but ... what about operational costs?"]
    [:li "Do you have DevOps culture?"]
    [:li "Instead, please look at the highest level of Erlang/Elixir systems."]
    [:li "We have applications. It means that Erlang was built 30 years ago with microservices in mind."]
    [:li "So we have concurrency baked in the langauge and distribution in the platform."]]])

(defslide foundation-and-similarities [_]
  [:div
   [:h1.huge.center.mt-30 "30+ years of engineering!"]
   [:h2.center.mb-30 "1982 - " [:a {:href "http://www.erlang.org/course/history.html" :target "_blank"} "History"]]
   [:img.image {:src "images/TelecomAnalogy.png" :alt "Analogy of the web to telecom industry."}]
   [:ul.notes
    [:li "It is impossible to talk about Elixir without talking about Erlang."]
    [:li "BEAM ecosystem - Standing on the shoulders of giant."]
    [:li "Why we should care about telecom? Well, it is our use case."]
    [:li "If we have Erlang, why we need to build something else?"]]])

(defslide elixir [_]
  [:div
   [:h1.huge.center.top-10 "Elixir"]
   [:p [:em "Elixir"] " is a dynamic, functional language designed for building scalable and maintainable applications."]
   [:p "It leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems, while also being successfully used in web development and the embedded software domain."]
   [:ul.notes
    [:li "Functional programming - Immutability, Recursion, Referential Transparency."]
    [:li "It gathers many interesting and influencing features from other languages"]
    [:li "... like Borg. Asymilating good ideas - let's look at this."]]])

(defslide elixir-example [_]
  [:div
   [:h1.huge.center.mb-10 "Example"]
   [:div {:id "ee4aa647fc5cc341ada9" :class "gist" :data-language "elixir"} nil]
   [:ul.notes
    [:li "Influences - F# (Pipe operator)"]
    [:li "Influences - Clojure (Protocols, Homoiconic language, Macros)"]
    [:li "Influences - Ruby (Syntax)"]
    [:li "Influences - Erlang (Platform and Foundation)"]
    [:li "Pattern matching, Pipe operator, Enumerables."]
    [:li "Syntax similar to Ruby."]]])

(defslide phoenix [_]
  [:div.center
   [:h1.huge.top-10.mb-30 "Phoenix"]
   [:img {:src "images/PhoenixServer.png" :alt "Phoenix server and clients."}]
   [:ul.notes
    [:li "Elevator pitch for Phoenix."]
    [:li "Easy for developers (Speed)."]
    [:li "Easy to deploy (Heroku Case)."]
    [:li "You are not sacrificing performance!"]
    [:li "Solid abstractions - Plug."]
    [:li "Solid web server - Cowboy."]
    [:li "Dealing with databases - Ecto."]
    [:li "Dealing with rest of the world - client libraries for C#, Java, ObjC and Swift."]]])

(defslide phoenix-example [_]
  [:div
   [:h3.center "Phoenix - Kick-off and Generators example"
    [:div {:class "asciinema" :id "cpmm55qwltxcpx7kvmj05jvcl"} nil]]])

(defslide demo [_]
  [:div
   [:h1.huge.center.mb-10 "Demo"]
   [:img.max-width.inverted {:src "images/simulation.gif" :alt "Simulation and 3D visualization."}]
   [:ul.notes
    [:li "afronski/wolves-and-rabbits-world-simulation-ui"]
    [:li "iex -S mix phoenix.server"]
    [:li "http://localhost:4000"]]])

(defslide next-steps [_]
   [:div
    [:h1.huge.center.top-10 "What's next?"]
    [:ul
     [:li [:a {:href "https://pragprog.com/book/elixir/programming-elixir"} "Programming Elixir (by Dave Thomas)" ]]
     [:li [:a {:href "http://shop.oreilly.com/product/0636920030584.do"} "Introducing Elixir" ]]
     [:li [:a {:href "https://pragprog.com/book/cmelixir/metaprogramming-elixir"} "Elixir Metaprogramming"]]
     [:li.mt-30 [:a {:href "http://learnyousomeerlang.com/content"} "Learn You Some Erlang!"]]
     [:li [:a {:href "https://pragprog.com/book/jaerlang2/programming-erlang "} "Programming Erlang, 2nd Edition"]]
     [:li.mt-30 [:a {:href "http://www.meetup.com/Silesian-BEAMers/"} "Silesian BEAMers - we're starting!"]]
     [:li.mt-30 "Learn by doing!"]]])

(defslide thank-you [_]
  [:div
   [:h1.huge.center.top-10 "Thank you!"]
   [:div.logos
    [:img {:src "images/elixir.png" :alt "Elixir logo."}]
    [:img {:src "images/phoenix.png" :alt "Phoenix logo."}]]])

(defslide resources [_]
  [:div
   [:h1.huge.center.top-10 "Resources"]
   [:ul.center.no-list
    [:li.mb-10
     [:a
      {:href "https://mitpress.mit.edu/sicp/full-text/book/book.html"
       :target "_blank"}
      "Structure and Interpretation of Computer Programs"]]

    [:li.mb-10
     [:a
      {:href "https://en.wikipedia.org/wiki/Amdahl%27s_law"
       :target "_blank"}
      "Amdahl's Law"]]

    [:li
     [:a
      {:href "http://highscalability.com/blog/2014/3/31/how-whatsapp-grew-to-nearly-500-million-users-11000-cores-an.html"
       :target "_blank"}
      "WhatsApp Architecture #1"]]

    [:li
     [:a
      {:href "http://highscalability.com/blog/2014/2/26/the-whatsapp-architecture-facebook-bought-for-19-billion.html"
       :target "_blank"}
      "WhatsApp Architecture #2"]]

    [:li.mt-10
     [:a
      {:href "http://highscalability.com/blog/2014/10/13/how-league-of-legends-scaled-chat-to-70-million-players-it-t.html"
       :target "_blank"}
      "Scaling Legue of Legends chat to 70 million players"]]

    [:li.mt-10
     [:a
      {:href "https://github.com/afronski/wolves-and-rabbits-world-simulation-ui"
       :target "_blank"}
      "afronski/wolves-and-rabbits-world-simulation-ui"]]

    [:li
     [:a
      {:href "https://github.com/afronski/wolves-and-rabbits-world-simulation"
       :target "_blank"}
      "afronski/wolves-and-rabbits-world-simulation"]]

    ]])

(defn ^:export main []
  (f/presentation-init app-state)

  (om/root
   (f/presentation-root slides-list)
   app-state
   {:target (. js/document (getElementById "app"))})

  (f/for-all-nodes ".gist"
                   #(gist/load (str "https://api.github.com/gists/" %1) (gist/highlight %2)))

  (f/for-all-nodes ".asciinema"
                   #(asciinema/load %1 %2))

  (f/start-timer 30)

  (f/restore-slides-from-hash app-state slides-list)
  (.addEventListener js/window "hashchange" #(f/go-to-hash app-state slides-list)))

(defn reload-on-changes []
  (let [old (:counter @app-state)
        max (:max-counter @app-state)]
    (f/go-to-slide (inc max) slides-list app-state)
    (js/setTimeout #(f/go-to-slide old slides-list app-state) 100)))
