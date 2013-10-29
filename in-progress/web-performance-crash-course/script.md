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

- Opisać proces przetwarzania strumienia bajtów na drzewo DOM (parsowanie).
- Nigdy nie używać document.write!

- Opisać różnicę między regular/async/defer.
- Powiedzieć o ściąganiu skryptów na żądanie (on demand).

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

- HTML 5 wreszcie posiada zdefiniowany w specyfikacji sposób parsowania dokumentu, poprzednie wersje takiego algorytmu nie
  definiują co doprowadziło do dużej niespójności między poszczególnymi przeglądarkami.

- GPU nadaje się do operacji macierzowych, optymalizacji przesunięć, translacji, mieszania półprzezroczystych warstw.
- GPU nie nadaje się np. do operacji typowo na 2D lub do renderowania fontów (artefakty).

- Nie nadużywać CPU, GPU, WiFi, 3G / 4G dla urządzeń mobilnych, bo to znacząco obniża czas pracy na baterii.

### Nad czym się NIE rozwodzić?

- Jakie biblioteki lub jak rozwiązać dociąganie skryptów on demand.

- Jak wymuszać wrzucenie warstwy na GPU.

## Narzędzia

### Co MUSZĘ powiedzieć?

- Navigation Timing API - ważne z punktu widzenia metryk i informacji o połączeniu jakie posiada klient.

### Co WARTO powiedzieć?
### Nad czym się NIE rozwodzić?

## Benchmarks

### Co MUSZĘ powiedzieć?

- Tryb prywatny
- Microbenchmarks are bad!

### Co WARTO powiedzieć?

- "Najpierw zmierzyć, potem uciąć."

### Nad czym się NIE rozwodzić?

- Nie mów jak używać narzędzi, skup się jak nie robić benchmarków.