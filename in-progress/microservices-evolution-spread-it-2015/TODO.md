# Evolution > Revolution - how microservices architecture should evolve

## Topics

- Microservice architecture isn't something new.
  - SOA
  - CORBA
    - Client-server promise - ignoring the networking layer - is wrong.
    - That is the place when the complexity starts to creep in.
  - UNIX philosophy - CLI tools, deamons and services.
  - Erlang - AXD301 case study.
- Revolution is not an option.
  - Painful
  - Expensive
  - Requires huge knowledge about domain.
  - Requires more technical knowledge than you think.
  - Requires additional effort (and sometimes skills) from your teams.
  - Starting with microservices is an anti-pattern.
    - Netflix, eBay, Wunderlist... every case is evolutionary.
  - Look at the nature, it is really microservice-oriented, but it wasn't
    designed like that since beginning, it evolved during the years.
  - If you don't have time for evolution, don't do it - start with a monolith.
    - When you establish MVP, when you confirm your business, when you will get
      more familiar with your clients wishes and domain space then it is time to
      build something in an evolutionary manner.
  - And again - do not do big-bang migration approach from old-fucked-monolith
    to brand-new-shiny-microservices.
    - It will either bring a ton of shitload to you after migration (changing
      too many things in short period of time) or you will effectively collapse
      under its own weight (like in Wunderlist case).
- Benefits.
  - More switches and knobs in terms of tuning.
  - More diversity in terms of tooling.
  - Enforces more diverse responsibilities in teams, making team more mature.
  - Context and sub-domains oriented teams.
  - More suited tools for a different problem spaces (but can be painful and wrong).
  - Thinking about "unthinkable" upfront - horizontal scaling.
- Remarks:
  - More knowledge required.
  - "You have to be this tall to do microservices".
  - Build on top of solid abstractions.
  - Keep in mind maintainability, LTS and keeping many parties up to date.
- Essential complexity vs. Accidental complexity.
  - It is easier to introduce accidental complexity in monolithic architecture.
    - Coupling in terms of code boundaries, data schema and data structures.
    - Sharing is easier, which can be painful.
  - Microservices are increasing essential complexity, because of distributed nature.
    - Communication layer - things like latency, coordination, agreeing on common state.
    - Concurrency starts to creep in.
    - Lack of consistency, fuzzy boundaries, lack of documentation and lack of contracts.
    - Hard problems - contracts versioning, caching (and invalidation), service
      discovery, structuring applications in consistent manner, easy
      bootstrapping, monitoring, automated deployment, complexity related with
      communication layers.
