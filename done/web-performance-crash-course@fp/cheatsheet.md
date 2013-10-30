# Cheatsheet

## JavaScript

### Chrome

- Prezentujemy działanie na 'Timeline'.
- Oceniamy co spowalnia, wykonujemy profil CPU.
- Pokazujemy drzewo, sumaryczny widok i flamechart.
- Poprawiamy i wykonujemy nowy profil.

### Firefox

- Sprawdzamy co spowalnia na Firefox za pomocą profilera.
- Poprawiamy i pokazujemy różnicę.

### WPT i IE 11

- Analizujemy przykład dogłębniej na IE 11, jednocześnie nagrywając dane do WPT.
- Prezentujemy dane i przeglądamy, skupiając się tylko na znalezieniu przyczyny.

## Pamięć

### leaking-dom

- Uruchomić stronę i 'Timeline' z zakładką 'Memory'.
- Zaprezentować, że rośnie nam licznik dla węzłów DOM i Event Listenerów.
- Następnie profilujemy pamięć w trybie automatycznym.
- Przeglądamy, poprawiamy i pokazujemy różnicę.

### leaking-javascript

- Uruchomić stronę i 'Timeline' z zakładką 'Memory'
- Pokazujemy jak zamiast piły, wykres pamięci nam rośnie.
- Robimy zrzut, naszą podejrzaną akcje, drugi zrzut.
- Pokazujemy porównanie, poprawiamy i sprawdzamy wynik.

## DOM

### layout-trashing

- Uruchomić stronę i pokazać jak wolno działa.
- Uruchomić 'Timeline' i pokazać skąd się 'layout trashing' bierze.
- Poprawić i pokazać różnicę.

### scrolling-issue

- Uruchomić 'continuous repaint mode' oraz FPS.
- Następnie 'Timeline'.
- Zaprezentować co przeszkadza przy scrolowaniu.
- Poprawić.
- Pokazać 'Timeline' i różnicę w 'continuous repaint mode'.

### gpu

- Uruchomić 'Timeline' i pokazać jak wygląda rysowanie poszczególnych warstw.
- Zaprezentować w jaki sposób wymusić przerzucenie elementu do nowej warstwy w pamięci GPU.
- Zaprezentować różnicę w 'Timeline'.

## Sieć

### slow-get-post

- Zakładka 'Network'.
- Pokazać jak wyglądają czasy, jak śledzić detale.
- Przy okazji zoptymalizujemy i pokażemy jak skrypty wpływają na parsowanie.

### images-gallery

- Zakładka 'Network'.
- Pokazać ile żądań idzie jednocześnie, po ile równolegle, a ile czeka.
- Pokazać brak nagłówków HTTP Cache.
- Uruchomić audyt z Google Chrome i zanalizować wyniki.
- Uruchomić PageSpeed i pokazać wyniki.