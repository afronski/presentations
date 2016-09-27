%title: Czym jest *property-based testing*?
%author: afronski
%date: 2016-09-27

-> To jest *Janusz* - nasz _archetyp_.

-> O
-> /|\\
-> / \\

-> Przywitajcie się z Januszem!
-> (czekam na chóralne *"Cześć Janusz!"*)

Disclaimer: *Żaden Janusz nie ucierpiał podczas przygotowywania prezentacji*.
Disclaimer: *Mam na drugie Janusz*.

-------------------------------------------------

-> Janusz *lubi*:

\* Przychodzić równo o 8:00 AM CEST
\* Wychodzić punkt 4:00 PM CEST
\* Podwyżki
\* Firmowego Xboxa

-------------------------------------------------

-> Janusz *nie lubi*:

\* Nadgodzin
\* Swojego menadżera
\* ... tu wstaw dowolną rzecz, której Ty również nie lubisz ...
\* Pisać testów jednostkowych

-------------------------------------------------

-> To jest Janusz po napisaniu kolejnych 100 testów jednostkowych:

\    _________
\   |       |
\   |       0
\   |      /|\\
\   |      / \\
\   |
\   |
\ ------

\- Bo musiał napisać testy do przygotowanego przez siebie algorytmu wyliczania skrótu.
\- Bo musiał napisać testy do maszyny stanów z przypadkami brzegowymi.
\- Bo musiał napisać testy do walidatora kodów pocztowych.
\- Bo musiał ... *BANG*!

-------------------------------------------------

-> Dlaczego aż tyle?

-> Mając do przetestowania `N` funkcjonalności, bardzo często musicie wygenerować
   przypadki testowe dla pary, trójki i bardziej licznych grup.

-> Oznacza to, że dla 3 różnych funkcjonalności powinniśmy napisać `O(n^3)`
   przypadków testowych, co gorsza - bardzo często kilka - kilkanaście z nich
   nie ma sensu, i musimy je wyeliminować.

-------------------------------------------------

-> A można tak:

     %%% tokenizer_properties_SUITE ==> tokenizer_should_exclude_superfluous_tokens: OK
     ...................................................................
     ... <za każdą kropkę tutaj zginął jeden kotek - żartowałem ;)>  ...
     ... <każda kropka to dokładnie jeden test> ........................
     ............
     OK: Passed 1000 test(s).

-------------------------------------------------

-> Co to jest _property-based testing_?

    [...]
    The programmer provides a specification of the program, in the form of properties
    which functions should satisfy, and *tool* then tests that the properties hold
    in a large number of randomly generated cases.

-------------------------------------------------

-> Autorzy

-> *John Hughes* - współtwórca języka *Haskell*, autor ["Why functional programming matters?"](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf).
-> *Koen Claessen* - jego student.

-------------------------------------------------

-> Historia

\* 1999 - powstaje pierwsza wersja *QuickCheck* napisana w ... *Haskellu*.
\* 2000 - oficjalna [publikacja](http://www.cs.tufts.edu/~nr/cs257/archive/john-hughes/quick.pdf) na ten temat.
\* 2006 - powstaje firma *QuviQ*, która dostarcza licencje dla oryginalnej wersji *QuickCheck* (*C*, *Erlang*, *Automotive*, *Haskell*).
\* 2012 - ta sama firma, uruchamia stronę [*QuickCheck CI*](http://quickcheck-ci.com/).
\* 2016 - każdy popularny język posiada przynajmniej jedną własną implementację *QC*.

-------------------------------------------------

-> Czym są *własności*?

-> Jest to coś niezmiennego, coś co możemy zdefiniować dla naszej funkcjonalności.
-> Zachowanie, które wiemy, że powinno zostać utrzymane dla testowanego kodu,
-> niezależnie od parametrów wejściowych i stanu zewnętrznego.

-> Inaczej powiemy, że to *niezmiennik* lub *zawsze spełnione zachowanie*.

-------------------------------------------------

-> Przykład - Sortowanie

    ghci> qsort([ 16, 2, 9, 1, 0, -2, 5, 0, 32, 17 ])
    [-2,0,0,1,2,5,9,16,17,32]

-------------------------------------------------

-> Przykład - najprostsza własność

-> *Haskell* - plik `qsort.hs`:

    -- Funkcyjna implementacja sortowania szybkiego:
    qsort :: Ord a => [a] -> [a]
    qsort []     = []
    qsort (x:xs) = qsort lhs ++ [x] ++ qsort rhs
        where lhs = filter  (< x) xs
              rhs = filter (>= x) xs

    -- Nasza pierwsza własność - długość tablicy po sortowaniu
    -- jest identyczna jak przed sortowaniem:
    prop_length xs =
        length xs == length (qsort xs)

-> Następnie ładujemy w *REPL*:

    ghci> :l qsort.hs
    ghci> quickCheck prop_length
    +++ OK, passed 100 tests.

-------------------------------------------------

-> Przykład - niezmienniki

-> *Haskell*:

    -- Kolejna własność - idempotentność:
    prop_idempotency xs =
        qsort (qsort xs) == qsort xs

    -- Kolejna własność - po sortowaniu pierwszy
    -- element jest jednocześnie najmniejszym:
    prop_minimum xs =
        head (qsort xs) == minimum xs

    -- Kolejna własność - po sortowaniu ostatni
    -- element jest jednocześnie największym:
    prop_maximum xs =
        last (qsort xs) == maximum xs

Przy okazji zaprezentujemy pierwszy błąd, ponieważ
dwie ostatnie własności nie są prawdziwe dla pewnych
określonych przypadków.

-------------------------------------------------

-> Przykład - Geohash

    {0, 0}                 == "s000"
    {50.263850, 18.995779} == "u2vtbq221sz2"

-------------------------------------------------

-> Przykład - encode-decode

-> *Elixir*:

    test "encoding coordinates and then decoding should return the same coordinates (for integer precision)" do
      assert verify_property(
        for_all {x, y} in {lat(), lng()}, do:
          {x, y} == Cartographer.Decoder.from_geohash(Cartographer.Encoder.to_base32_geohash(x, y), 0)
      )
    end

-> [Przykład](https://github.com/afronski/cartographer/blob/master/test/cartographer_encode_decode_properties_test.exs)

-------------------------------------------------

-> Przykład - Brainfuck

    ++++++++++[>+++++++>++++++++++>+++>+<<<<-]
    >++.>+.+++++++..+++.>++.<<+++++++++++++++.
    >.+++.------.--------.>+.>.

\    Pamięć indeksowana od 0 do 30000 słów.
\    Słowo to liczba z zakresu 0 .. 255.
\    Każda instrukcja, poza skokami zwiększa wskaźnik instrukcji o 1.

\    +   Inkrementacja wartości w komórce pamięci
\    -   Dekrementacja wartości w komórce pamięci

\    >   Inkrementacja wskaźnika pamięci
\    <   Dekrementacja wskaźnika pamięci

\    \[   Jeśli wartość w komórce pamięci jest równa 0,
\        skocz do najbliższego ] zamiast przesunięcia o 1
\    ]   Jeśli wartość w komórce pamięci nie jest równa 0,
\        skocz do poprzedzającego [, zamiast przesunięcia o 1

\    .   Wypisz na STDOUT wartość z aktualnej komórki pamięci jako kod ASCII
\    ,   Pobierz z STDIN znak i wpisz do aktualnej komórki pamięci wartość kodu ASCII

-------------------------------------------------

-> Przykład - niezmienniki

-> *Erlang*:

    prop_programs_with_proper_loops_should_finish_in_finite_time() ->
        ?FORALL(Program, program_with_valid_loops(),
            begin
                Input = bferl_programming_language_logic:new(to_tokens(Program)),
                Output = bferl_programming_language_logic:run(Input),
                Output#interpreter.instructions_pointer =:= length(Program) + 1
            end).

-> [Przykład](https://github.com/afronski/bferl/blob/master/test/models/brainfuck_program_model.erl#L41)

-------------------------------------------------

-> Przykład - przykładowy generator

-> *Erlang*:

    -spec program_with_valid_loops() -> program_with_loops().
    program_with_valid_loops() ->
        ?LET(Program,
          ?SUCHTHAT(TestedProgram,
                    list(oneof([while, left, right, end_while])),
                    loop_stack_should_be_empty(TestedProgram)),
          Program).

-> [Przykład](https://github.com/afronski/bferl/blob/master/test/models/brainfuck_program_model.erl#L91)

-------------------------------------------------

-> Przykład - błąd i *shrinking*

-> *Haskell*:

    ghci> quickCheck prop_first_element_is_the_minimum_after_sorting
    *** Failed! Exception: 'Prelude.head: empty list' (after 1 test):
    []
    it :: ()

-> *Erlang*:

-> Celowo wprowadzimy błąd w tokenizerze i pokażemy jak działa *shrinking*:

    ===> Running Common Test suites...
    ..............................................................
    ... <wykonujemy kolejne testy>  ..............................
    ..............................................................
    .........!
    Failed: After 519 test(s).

    [11,70,0,2,89,7,11,120,27,10]

    Shrinking ...(3 time(s))
    [89]

-------------------------------------------------

-> Przykład - *circular buffer*

\         [   ]
\ ------> [ 2 ]
\         [ 1 ] ------>

    int size(Queue* q)
    {
        return (q->inp - q->outp) % q->size;
    }

-------------------------------------------------

-> Przykład - stan

-> *Erlang*:

    get_pre(S) ->
        S#state.ptr /= undefined andalso
            S#state.contents /= [].

    get_next(S, _V, _A) ->
        S#state{contents = tl(S#state.contents)}.

    get_post(S, _A, Result) ->
        eq(Result, hd(S#state.contents)).

-------------------------------------------------

-> Zastosowania

\* Na pierwszy rzut oka widać, że nie do każdego typu testów ten sposób się nadaje:
  \* Dalej będziemy pisać testy jednostkowe. :(
  \* Ale nie musimy generować z pamięci przypadków testowych. :)
\* Pewne klasy problemów automatycznie pasują do tego typu testów:
  \* Funkcje odwracalne np. enkoder - dekoder.
  \* Funkcje o własnościach matematycznych.
  \* Wyjście przewidywalne na podstawie wejścia - *pure functions*, *no side-effects*.
\* Są domeny, które wymagają bardzo dużej niezawodności:
  \* Jednym z koronnych przykładów, jest *automotive* i współpraca firmy *QuviQ* z
    firmą *Volvo*, podczas którego cała magistrala CAN, protokół sterowania i
    wymiany danych pomiędzy komponentami oraz inne podzespoły zostały
    przetestowane.

-------------------------------------------------

-> Problemy

\* Bardziej skomplikowane testy (zwłaszcza te które utrzymują stan) wymagają zbudowania modelu.
  \* Model nie może być identyczny jak implementacja (problem powielenia, wraz z błędami logicznymi).
  \* Wymyślenie zupełnie innego mechanizmu weryfikacji
     jest nierzadko dużo bardziej złożoną zagadką logiczną,
     niż znalezienie / wymyślenie własności.
\* Co z efektami ubocznymi?
  \* *Long story short*: Mockujemy :(
    \* Przykład znajdziecie w bibliotece [jlouis/fuse](https://github.com/jlouis/fuse/blob/master/test/fuse_time_mock.erl) gdzie autor musiał _zamockować_ czas.
  \* Abstrachujemy "czystą" implementację gdzieś obok, tak aby ją obłożyć testami.

-------------------------------------------------

-> Linki

\* [John Hughes - Testing the Hard Stuff and Staying Sane](https://www.youtube.com/watch?v=zi0rHwfiX1Q)
\* ["QuickCheck: A Lightweight Tool for Random Testing of Haskell Programs"](http://www.cs.tufts.edu/~nr/cs257/archive/john-hughes/quick.pdf)
\* [Erlang (PropER)](https://github.com/manopapad/proper), [Clojure (test.check)](https://github.com/clojure/test.check), [Elixir (excheck)](https://github.com/parroty/excheck)
\* ["Why functional programming matters?"](http://www.cse.chalmers.se/~rjmh/Papers/whyfp.pdf)

-------------------------------------------------

-> Koniec!

-> ???
-> Pytania?

-> Dziękuję za uwagę! :)
