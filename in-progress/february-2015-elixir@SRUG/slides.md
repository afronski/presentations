class: center, middle

![Logo](images/elixir-logo.png)

.footer.smaller[[@afronski](https://twitter.com/afronski)]

???

Cześć!

Na początku chciałbym się przywitać i podziękować za zaproszenie na SRUG, to mój pierwszy raz na tym meetupie. Ci którzy mnie znają wiedzą, że z Ruby jestem związany bardzo słabo, praktycznie wyłącznie pracowałem z narzędziami do deploymentu i *infrastructure as a code* (Capistrano i Chef).

Natomiast na codzień zajmuje się projektowaniem i tworzeniem systemów rozproszonych, a bardzo często również samymi aplikacjami webowymi, projektowaniem API itp. I poruszając się w tych tematach, nie sposób nie natrafić na nawiązania do Erlanga.

Myślę, że każdy kto spotkał się z tym językiem korzystając z narzędzi (CouchDB, Riak, RabbitMQ) lub w czystej postaci, był nim mniej lub bardziej zaciekawiony. Każdy, kto choć trochę zna się na tworzeniu oprogramowania, nie odrzuci przy zdrowych zmysłach *20-kilku* lat doświadczenia i rozwiązania sprawdzonego w boju.

Ja swoją przygodę z Erlangiem rozpocząłem przez poszukiwanie "czegoś" co pomogłoby mi tworzyć skalowalne a przede wszystkim **stabilne** systemy. Myślę, że jedną z bardziej wartościowych publikacji, którą mogę polecić z czystym sercem jest "Making Reliable Distributed Systems In The Presence Of Software Errors" Joe Armstronga. Jeśli interesuje Was jak został zbudowany jeden z największych systemów telekomunikacyjnych, z niewiarygodną niezawodnością na poziomie 99.9999999%, napisanym w języku funkcyjnym.

---

# What?
## Legacy

.centered[![Ruby Logo](images/ruby-logo.png) ![Erlang Logo](images/erlang-logo.png) ![Clojure Logo](images/clojure-logo.png)]

???

Ale *Erlang* nie każdemu odpowiada.

W większości przypadków, zastrzeżenia budzi składnia (*Erlang* odziedziczył ją po *Prologu*). Ale nie tylko. Dość wysoki próg wejścia, brak oficjalnych narzędzi, brak systemu zarządzania zależnościami, mnogość opcji i bibliotek (przytłaczające dla początkującego) - to tylko kilka powodów dla których to nie jest język przyjazny początkującym.

---

# What?
## Syntax

```
defmodule MathTest do
  use ExUnit.Case, async: true

  test "can add two numbers" do
    assert 1 + 1 == 2
  end
end
```

???

---

# What?
## Capabilities

???

---

# Why?
## *unique selling proposition*

???

---

# Who?
## Community

???

---

# Case Study
## Functional Programming

???

---

# Case Study
## Macros and *homoiconicity*

???

---

# Case Study
## OTP

???

---

# Case Study
## Pipes

???

---

.huge[Thanks!]

.credits[Image credits:

- [Elixir](http://elixir-lang.org)
- [wikipedia.org](https://wikipedia.org)]

???

Dziękuję za uwagę, polecam się na przyszłość :).
