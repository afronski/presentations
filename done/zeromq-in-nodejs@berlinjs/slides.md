class: center, middle

[![ZeroMQ logo](images/zeromq.gif)](http://zeromq.org)

# ZeroMQ in Node.js

Wojtek Gawronski - [@afronski](https://twitter.com/afronski)

.logos[
[![rspective Logo](images/rspective.png)](http://blog.rspective.com)
[![NodeSchool Silesia Logo](images/nodeschool-silesia.png)](http://nodeschool.io/silesia)]

[@rspective](https://twitter.com/rspective), [@nodeschoolpl](https://twitter.com/nodeschoolpl) 

???

- Hello!
  - I've participated in Berlin.js several times and now it is my turn to give back to the community.
  - We should be grateful that the organizers are doing such wonderful job here - round of applause for them, please!
- Before we start, I'd like to briefly introduce me and our company.

---
class: center

# `~ $ whoami`

[![Rspective Banner](images/rspective-banner.png)](http://www.rspective.com/?utm_source=zeromq-in-nodejs&utm_medium=offline-presentations&utm_campaign=presentations)

???

- My name is Wojtek Gawroński (@afronski). I am a part of a rspective team.
  - We are a pragmatic software house based in Katowice, Poland, but we also have an office in Berlin.
    - We are here at least once in a month.
  - We are working mostly with start-ups - couple of them are from here, couple are from abroad.
  - But we also working with bigger companies, like e.g. SAS institute.
- We are also giving back to the community:
  - We are regularly organizing NodeSchool Silesia
  - We are bootstrapping other meet-ups in the Silesian region
  - And also we are cooperating with local Hackerspace community.
- Enough of this - let's go to the details!

---
class: center, middle

# Agenda

### Our Use Case
### Brief overview what ZeroMQ is
### Diving into small case study

???

- When I present something, I always try to have a real example. Likewise today, I will start with description of our use case
- Then, we will fluently move to the capabilities and features of ZeroMQ, and we will briefly talk about pattern language defined there.
- And after that, we will see how the actual implementation looked like and with what kind of challenges we have dealt during that project.

---
class: center, middle

# Our Case Study

<img alt="Diagram of our Use Case" class="diagram" src="images/use-case-diagram.png" />

???

- I can't disclose too many details regarding domain or the actual technicalities e.g. schema, protocols or algorithms.
  - But I all technicalities related with ZeroMQ and Node.js are identical to the ones in the original problem.
- Basically, we have to built additional visualization layer on top of existing system.
  - It is battle-proven working piece of machinery, so there was no need to change that.
  - Even, if there was a need to changing it - it won't be possible in the project schedule.
- In that system, we already had an integration points built with use of ZeroMQ.
  - So our job was to integrate, deploy and enhance existing product.
- Before we dive into more details, quick questions:
  - How many of you are familiar what ZeroMQ is?
  - How many of you worked with that library?
- For someone, which faces this topic first time, probably many terms and acronyms have no meaning.
  - So let's talk about that library and its terminology.
  
---

# `ZeroMQ` - Characteristics

- *Rather than being a single package or library, ZeroMQ is a community of projects focused on decentralized computing*.

- *TODO*: Authors, history, motivation and origin.
- *TODO*: Use Cases.
- *TODO*: Multiple slides!
- *TODO*: Focus on things which are most important for ZeroMQ philosophy.
- *TODO*: Microservices or SOA approach, even before that.

???

---

# Key things related with `ZeroMQ`

- *TODO*: Distributed Systems.
- *TODO*: Community!
- *TODO*: ZGUIDE ;) and Pattern language.
- *TODO*: What is a Lazy Pirate?

???

---

# ZeroMQ - Transport Layer

- *TODO*: Protocol, all internals, corner cases regarding behaviour.
- *TODO*: TCP, PGM, inproc, ipc.

???

---

# ZeroMQ - Payload and Security

- *TODO*: Payload format is up to you.
- *TODO*: Security is up to you (from NONE to TRY-TO-CRACK-THIS).

???

---

# ZeroMQ - Interoperability

- *TODO*: Unified protocol implementations across languages.
- *TODO*: Example code - Erlang <-> Node.js.

???

---

# Case Study - Library

- *TODO*: Require and library installation.
- *TODO*: Native libraries.

???

---

# Case Study - Sockets and Abstractions

- *TODO*: REQ, REP, XREQ, XREP, PUB, SUB, XPUB, XSUB.

???

---

# Case Study - Signals

- *TODO*: Cleaning up, closing sockets, handling SIGINT.

???

---

# Case Study - Challenges

- **Deployment** - *IaaS* or addons for *PaaS* (like [Ruppel's Sockets](https://devcenter.heroku.com/articles/ruppells-sockets#connecting-your-app)).


- **Operations** - Dealing with *TCP* (*knowledge*, *harder to maintain*).
- **Operations** - Dealing with *TCP* - Corner cases are *expensive*.
  - *It all depends on your requirements*.

- **Designing** - *TODO*: Different approach, different thinking, different abstractions.

- **Distributed Systems** - *TODO*: Different techniques, different advantages and different problems.

???

- Major challenge that you will face with *TCP-based* services is that it is not *PaaS* friendly.
  - You can workaround this by using *VPS*, *IaaS* or providing additional addons to your favorite *PaaS*.
  - Still, it is an additional operational and implementation cost.
- You need to deal with different problems than usual infrastructure - operation cost will be higher.
  - Especially at the beginning.
- Corner cases related with *TCP* are much harder to track and often they are very expensive to fix.
  - Everything depends on your requirements and *SLA*. 

---
class: center

# Resources

.book-covers[
[![ZeroMQ Book - Cover](images/zeromq-book-cover.gif)](http://shop.oreilly.com/product/0636920026136.do)
[![Node.js: The Right Way - Cover](images/nodejs-right-way-book-cover.jpg)](https://pragprog.com/book/jwnode/node-js-the-right-way)
[![Code Connected - Volume 1](images/code-connected.jpg)](https://www.createspace.com/4098511)]

[ZeroMQ Guide](http://zguide.zeromq.org/page:all)

[afronski/btc-txn-zmq-svc](https://github.com/afronski/btc-txn-zmq-svc)

[Peter Hintjens - Distribution, Scale and Flexibility with ZeroMQ](https://www.youtube.com/watch?v=yhGXJ9Jt3-A)

[Matrin Sustrik - ØMQ: A way towards fully distributed architectures](https://www.youtube.com/watch?v=RcfT3b79UYM)

???

- At the end I have attached couple of useful resources.
  - I especially recommend books - "ZeroMQ" from O'Reilly (Warning: C code inside) and "Node.js: the Right Way".
  - Videos will be useful to grasp the ideas and philosophy behind ZeroMQ.
  - Code presented here is available on my Github account.

---
class: center middle

# Thanks! <img alt="Heart" src="images/heart.png" class="emoji" />

[![ZeroMQ logo](images/zeromq.gif)](http://zeromq.org)

## Questions?

###  Tomatoes? <img alt="Heart" src="images/tomato.png" class="emoji" />

???

- So that will be all from my side. Thank you!
- Do we have time for questions?
