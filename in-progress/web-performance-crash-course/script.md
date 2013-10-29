# Script

## Wprowadzenie

### Co MUSZĘ powiedzieć?

- Niebieski - nagłówki.
- Zielony - zapamiętać.
- Żółty - uważać.
- Czerwony - nie powtarzać.

- UI -> responsywność < 100 ms.
- Czas ładowania strony < 1 s.

- 60 FPS -> płynny user experience.
- 30 FPS -> akceptowalny user experience.
- "Budżet" przeznaczony na jedną ramkę (16.67 ms).

- Lepszy stały FPS niż zmienny (gorsze wrażenie spowodowane przez szarpanie, utratę klatek i tzw. nadganianie).

## Budowa przeglądarki

### Co MUSZĘ powiedzieć?

- Opisać na czym polega "time slicing" / "context switching" w przeglądarce.

- Opóźnienie ma większy wpływ na TCP niż brak przepustowości.
- HTTP ma swoje wady (obszerność odpowiedzi, brak multiplexingu dla jednego otwartego połączenia).

- Jasno zaznaczyć, że w mobile opóźnienia są jeszcze gorsze i tam szczególne znaczenie ma optymalizacja ilości żądań.

- Korzystaj z HTTP Cache.
- Limit 6 równolegle otwartych połączeń do jednej subdomeny (sharding obchodzi ten problem).

- Opowiedzieć na czym polega optymalizacja dla ścieżki krytycznej.

- Opisać proces przetwarzania strumienia bajtów na drzewo DOM (parsowanie).
- Nigdy nie używać document.write!

- Opisać różnicę między regular/async/defer.
- Powiedzieć o ściąganiu skryptów na żądanie (on demand).

- Opisać czym jest layout / reflow.

- Opisać czym jest repaint.

- Powiedzieć krótko o ważności requestAnimationFrame().

- Wiele rzeczy już jest oznaczonych do akceleracji sprzętowej przez przeglądarkę automatycznie.
  - CSS3 transforms/animations, video, canvas ...
- Nie wrzucajmy wszystkiego na GPU!
  - Pamięć VRAM jest skończona.
  - Przesył danych RAM - VRAM jest kosztowny.
- To my wiemy najlepiej, które elementy są najcięższe i jeśli nie zostały przesłane do GPU, możemy dać wskazówkę przeglądarce.

- Dwie fazy GC - lekka do młodej generacji i ciężka, do starszej generacji.
  - Kryteria podziału na generacje: jak dawno temu zaalokowane, jak często używane.

### Co WARTO powiedzieć?

- Przeglądarki są coraz bardziej złożone (6 mln LOC dla Firefox 26).

- TCP three way handshake i wpływ opóźnienia na ten parametr oraz RTT (round trip time).

- Można pomóc przeglądarce przygotować się na kolejne za pomocą DNS prefetching i znaczników link z odpowiednim atrybutem rel.

- HTML 5 wreszcie posiada zdefiniowany w specyfikacji sposób parsowania dokumentu, poprzednie wersje takiego algorytmu nie
  definiują co doprowadziło do dużej niespójności między poszczególnymi przeglądarkami.

- GPU nadaje się do operacji macierzowych, optymalizacji przesunięć, translacji, mieszania półprzezroczystych warstw.
- GPU nie nadaje się np. do operacji typowo na 2D lub do renderowania fontów (artefakty).

- Nie nadużywać CPU, GPU, WiFi, 3G / 4G dla urządzeń mobilnych, bo to znacząco obniża czas pracy na baterii.

### Nad czym się NIE rozwodzić?

- Nie mów za dużo o SPDY i HTTP 2.0.

- Nie mówić za dużo o trybach pracy modemów 3G / 4G.

- Nie rozwodzić się nad obrazkiem dot. zbyt dużej ilości żądań.
- Raczej mów krótko i zwięźle o optymalizacji.

- Jakie biblioteki lub jak rozwiązać dociąganie skryptów on demand.

- Jak wymuszać wrzucenie warstwy na GPU.

## Narzędzia

### Co MUSZĘ powiedzieć?

- Krótko o IE 9, 10, 11.

- Grunt to dobrze poznać narzędzia deweloperskie w ulubionej przeglądarce.

- Navigation Timing API - ważne z punktu widzenia metryk i informacji o połączeniu jakie posiada klient.

- Krótko o ySlow, PageSpeed i Google Speed Tracer.

- Opowiedz do czego mogą służyć Google Web Performance Toolkit oraz chrome://tracing.

- Zachęcić do Windows Performance Toolkit.

- Zachęcić do zbadania tematu na temat V8 profiler, ale nie rozwodzić się.

### Co WARTO powiedzieć?

- Geneza powstania "responsiveness timeline" w IE 11 (akcja na Twitterze).

### Nad czym się NIE rozwodzić?

- Nie mówić o Operze, Safari i nie za dużo o IE 9 / 10.

## Benchmarks

### Co MUSZĘ powiedzieć?

- Tryb prywatny
- Microbenchmarks are bad!

### Co WARTO powiedzieć?

- "Najpierw zmierzyć, potem uciąć."

### Nad czym się NIE rozwodzić?

- Nie mów jak używać narzędzi, skup się jak nie robić benchmarków.