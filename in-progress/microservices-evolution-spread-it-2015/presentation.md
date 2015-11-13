title: Evolution > Revolution – how microservices should evolve
author:
  name: Wojtek Gawroński
  email: contact@white-rook.pl
  twitter: afronski
  github: afronski
  url: http://white-rook.pl
style: stylesheet/main.css
output: presentation.html
controls: true
theme: sjaakvandenberg/cleaver-dark

--

# Evolution > Revolution

## How microservices should be built?

## *About maturity in systems design*

--

# Disclaimer: this is not a *tech talk*

-- center

# 4 stories

## Microservices ain't something *new*
## Know your *domain*
## *Evolution* is the key
## Tale about *complexity*

-- logos

### `~ # whoami`

> pragmatic *system builder*, sometimes *software writer*

[![White Rook logo](images/WhiteRook.jpg)](http://white-rook.pl)
[![rspective logo](images/rspective.png)](http://rspective.com)

--

### Microservices ain't something *new*

#### *SOA*, is that you?
#### *CORBA* in disguise?

-- images

### Microservices ain't something *new*

![Nervous system is an example of microservice architecture.](images/nervous-system.jpg)
![Hive is an example of microservice architecture](images/hive.jpg)

--

### Microservices ain't something *new*

#### *03.11.1971* - UNIX initial release date
#### Operating systems architecture and design

```
tr 'A-Z' 'a-z' <fnord.txt | tr -cs 'a-z' '\n' | sort | uniq | comm -23 - /usr/share/dict/words

```

--

### Microservices ain't something *new*

#### *1975* - *Actor Model* formalization
#### *1986* - Erlang was created
#### *1998* - *AXD301* - Erlang system with 99.9999999% reliability
#### *2015* - How many *Erlang*-like framework implementations we have in the wild?

> Any sufficiently complicated concurrent program in another language contains an ad hoc informally-specified bug-ridden slow implementation of half of Erlang and OTP.

*Virding's First Rule of Programming*

--

### Microservices ain't something *new*

![Framework WTF](images/framework-bloat.jpg)

--

### Microservices ain't something *new*

#### *Context is the king*
#### We are learning on our failures
#### New is coming? *Unikernels*? Every good idea from IT has roots in *60s* or *70s*

--

*TODO*:

  - Know your domain (You can start from uservices, if you are doing it 3rd time in a row - Parkeon Example).
    - Znajomość domeny jest kluczowa, to dojrzałość.
    - Microservices envy - nowy TechRadar.
  - Evolution is the key (BAT example, Wunderlist example).
    - Co zrobić jak nie ma dojrzałości?
    - Zaczynasz od zera, budujesz coś małego, skupiasz się na biznesie i ewoluujesz.
    - Agile, Lean, Scientific Method, Data-driven - obojętne, model jest ten sam - buduj, zbadaj&zmierz, wnioskuj -> rinse&repeat.
    - Rewolucja (niedojrzałość - róbmy mikroserwisy od jutra!) może zabić Twój biznes.
  - Complexity management (monolit - dużo złożoności przypadkowej, system rozproszony - duża złożoność esencjonalna problemu).
    - Jak robisz service discovery w monolicie? CTRL + SPACE (he he he)
    - Chcesz robić microservisy? A co wiesz o systemach rozproszonych?
    - Cytat carlosa bueno.
    - Dojrzałość techniczna - devops? bezwładność organizacji? odpowiedzialność za produkt nie za projekt?
    - mfowler - you have to be this tall to do microservices.
    - Rewolucja to oznaka niedojrzałości.
  - Róbmy produkty, nie projekty.
  - To IT żyje dla biznesu, nie odwrotnie. Bez biznesu nas nie ma.

--

### Mikroserwisy? Nic nowego...

--

### SOA

--

### Natura

--

### UNIX philosophy

--

### Inne platformy - Erlang

--

### *Unikernels*

--

### Mikroserwisy - tylko dla dorosłych?

> People are bad at predicting the performance of complex systems [...], our ability to create large and complex systems fools us into believing that we're entitled to understand them.

Carlos Bueno, *Mature Optimization Handbook*

-- mfowler-sketch

### Mikroserwisy - tylko dla dorosłych?

[![You have to be this tall to do microservices](images/sketch.png)](http://martinfowler.com/bliki/MicroservicePrerequisites.html)

Źródło: http://martinfowler.com/bliki/MicroservicePrerequisites.html

-- monolith

### Monolit?

![Framework bloat!](images/framework-bloat.jpg)

--

### Rewolucja?

--

### Ewolucja!

> Avoid microservice envy and start with one or two services before rushing headlong into developing more, to allow your teams time to adjust and understand the right level of granularity.

Źródło: https://www.thoughtworks.com/radar/techniques/microservice-envy

--

### Jak to robią inni?

--

### Zalety

--

### Pułapki

--

### Wymagania
