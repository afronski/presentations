# MICROSERVICES: EVOLUTION

## INTRO

- Nasza dziedzina jest jedną z młodszych, jeśli chodzi o nauki techniczne.
- Jako "inżynierowie" cierpimy z powodu wielu problemów, które są często charakterystyczne dla tzw. "wieku dziecięcego".
- Jednym z takich problemów, jest podążanie za modą za wszelką cenę.
- To nie będzie prezentacja techniczna, nie ma tu ani jednego slajdu z kodem. A jednak, będę mówił o pewnych elementach, która są kluczowe aby rozważnie i pragmatycznie korzystać z technologii. Będziemy mówić o *dojrzałości*.
- Chciałbym wam przybliżyć 4 historie. To jest to co chciałbym, żebyście zapamiętali z tej prezentacji a ja postaram się Was nie zanudzić rozwijając każdy z tematów, popierając go własnym doświadczeniem.
- Mimo, że na pierwszy rzut oka historie są różne, mają one jedną cechę wspólną - łączy je *dojrzałość*. Mam na myśli dojrzałość od strony technicznej, dojrzałość biznesową oraz doświadczenie.

## ABOUT

- Krótko o mnie - ja nazywam się Wojtek i od blisko 7 lat buduję systemy, obecnie w rspective (logo jest po prawej stronie slajdu). Nie będę oryginalny, jeśli powiem, że rekrutujemy - jeśli przytoczone historie Was zaciekawią, to jestem pewien, że praca z nami, dla Naszych klientów to jest coś co Wam się spodoba. Logo po lewej, to moja własna inicjatywa w ramach której prowadzę szkolenia i udzielam się wśród lokalnej społeczności.

## NIC NOWEGO

- Zaczniemy od najbardziej oczywistej rzeczy. Te bardziej doświadczone osoby w IT, przeżyły już coś podobnego kilka razy w swojej karierze. Wiele koncepcji zatocza koła, powraca jak rozbujane wahadło. Nie inaczej jest tutaj.
- Czy mikroserwisy to SOA albo CORBA w przebraniu? Nie koniecznie, chciałbym pokazać, że korzenie tej idei sięgają dużo głębiej. I rozpocznę, od tego że po raz kolejny (nomen-omen) jako ludzie małpujemy pewne rzeczy z natury.
- Jeśli spojrzeć jak wyewoluowała budowa żywych organizmów, jak pewne systemy i procesy w naturze są skonstruowane, zobaczymy analogię do tego co często nazywamy architekturą mikroserwisów - izolowane podsystemy, podzielone według odpowiedzialności, które komunikują się ze sobą.
- Ale spójrzmy dalej, na coś bardziej związanego z IT. Ktoś korzysta z UNIXa? Nie chodzi tylko o linię komend i `shell` w tym przypadku, zobaczcie jak są zbudowane systemy operacyjne, jak jest zbudowany sprzęt - zwyczajny PC, konsola, laptop. Znów mamy izolowane podsystemy, podzielone według poszczególnych odpowiedzialności, które się ze sobą komunikują.
- To co powtarzam jak mantra, to tak naprawdę jedyna definicja mikroserwisów, która mogłaby być zaakceptowana przez wszystkich. Ktoś powie, no dobrze - systemy operacyjne to za niski poziom dla Nas, byliśmy ograniczeni sprzętem a poza tym my jako programiści po prostu nauczyliśmy się budować systemy w ten sposób później. Nic bardziej mylnego! ;)
- Tylko jeden przykład - w latach 70 pojawił się *Actor Model*, a w latach 80 powstał Erlang (zainteresowanych odsyłam do zasobów tej prezentacji), którego podejście jest niczym innym jak architekturą którą my nazywaliśmy SOA a obecnie nazywamy mikroserwisami. Od 20 lat ktoś tworzy duże i złożone systemy zgodnie z tym modelem. W erze kiedy rodził się internet, a właściwie jeszcze go nie było.
- Dużo wcześniej pewne poddziedziny związane z tworzeniem oprogramowania (w tym przypadku domena telekomunikacyjna) w ten sposób podchodziły w ten sposób do budowania systemów. Jeszcze przed erą internetu! A obecnie frameworki takie jak Orleans (.NET) czy Akka (JVM) korzystają z doświadczeń *Erlangowców* i *actor model*.
- Ktoś powie: "Gadasz i gadasz - a gdzie historia?". Jest ona związana z tym cytatem. Parę lat temu miałem okazję pracować w projekcie, którego celem była budowa dużego systemu rozproszonego. Wykorzystywał on niedojrzałą (jak na te czasy) technologię, i stan wielu abstrakcji / bibliotek, które powstały przy okazji dewelopmentu ten cytat odzwierciedla idealnie. Dzięki temu projektowi zainteresowałem się Erlangiem, bo nie mogłem uwierzyć, że w taki sposób się tworzy duże systemy rozproszone.
- Widać wyraźnie, że technologie zatoczyły koło. Czy na marne? Nie do końca, to jest właśnie przejaw tego, że dojrzewamy i uczymy się na własnych błędach, a w ramach rozwoju tej dojrzałości potrafimy dobrać rozwiązanie biorąc pod uwagę kontekst w jakim ma zostać zastosowane. Czy nadchodzi coś nowego? Moim zdaniem każdy z nowych pomysłów związanych z IT, ma korzenie gdzieś w latach 60/70/80, musimy tylko do konkretnego z nich dojrzeć i nabrać doświadczenia, dojrzałości.

## ZNAJ SWOJĄ DOMENĘ

- Kolejna historia związana jest z tym cytatem. Najnowszy TechRadar od ThoughtWorks. I w 100% się z nim zgadzam.
- To stwierdzenie można uogólnić - powinieneś znać świetnie swoją domenę jeśli chcesz budować architekturę microserwisów. Nie oszukujmy się - nadrzędnym celem oprogramowania jest zarabiać pieniądze.
- Jeśli jesteś start-upem, który dopiero poznaje swój rynek, buduje swój model biznesowy, nie wiesz które elementy Twojego biznesu są najważniejsze i odgrywają kluczową rolę nie będziesz w stanie podzielić i zbudować architektury mikroserwisowej od początku do końca.
- Martin Fowler użył nawet sformułowania, że rozpoczynanie od mikroserwisów w większości przypadków to antywzorzec, tożsamy z wyklętym przez wszystkich big-upfront-design.
- Pracowałem przy dwóch różnych projektach - jeden z nich był budowany od początku w architekturze mikroserwisowej i został dowieziony. Dlatego, że osoby odpowiedzialne za budowę tego systemu robiły to 3ci raz, wliczając w to dwie poprzednie próby, jedną monolityczną i drugą serwisową. Dodatkowo doskonale znały swoją domenę, firma ta posiada ludzi ze znajomością tej konkretnej domeny z ponad 15 letnim doświadczeniem, którzy zbudowali i utrzymywali wiele podobnych systemów. Oni znali swoją domenę na wylot i mogli sobie na to pozwolić.
- Drugi przykład to start-up - tutaj również CTO podszedł z niesamowitą świadomością i rozpoczał dokładnie jak opisuje to ten cytat - od monolitu, stopniowo wydzialał serwisy i poddomeny w ramach stabilizacji modelu biznesowego, wnikliwej analizie, które elementy są kluczowe dla niego.
- Często używa się argumentu, że mikroserwisy pomagają podzielić zespół, wokół określonych obszarów i odpowiedzialności. Zbyt szybkie i błędne wydzielenie poddomen i serwisów, może skutkować sztucznym podziałem w zespole, który w momencie, gdy dany element przestanie być istotny będzie problemem jeśli chodzi o strukturę Twojego zespołu.
- Jeśli nie jesteś dojrzały biznesowo, wybierając architekturę mikroserwisową wpędzisz się w niemałe kłopoty, które w konsekwencji mogą utopić Twoją firmę / projekt.

## EWOLUCJA JEST KLUCZEM DO SUKCESU

- Chciałbym skupić się na tej historii, która mówi o start-upie którego model biznesowy dojrzewa. Głównie dlatego, że taki schemat jest po prostu skuteczny.
- Każda z firm, która obecnie jest gorącym orędownikiem architektury mikroserwisowej - Wunderlist, eBay, Netflix, Allegro, dochodziła do tego stanu ewolucyjnie.
- Brak dojrzałości nie wyklucza w ogóle architektury mikroserwisowej, oznacza tylko, że powinieneś więcej czasu spędzić na poznaniu swojego biznesu.
- Agile, Lean, Scientific Method, Data-driven - obojętne, nazywaj to jak chcesz. Model zachowania jest ten sam - zbuduj coś wartościowego, zbadaj to i zmierz jak się zachowuje, wnioskuj - powtarzaj w koło, aż będziesz bogaty.
- Rewolucja, szybkie działanie może oznaczać niedojrzałość - to jest coś czego chcemy (nowy biznes, elastyczność, potrzeba zmian) lub coś czego się boimy i reagujemy paniką.
- Pracuję obecnie ze startupem, który ewoluuje w kierunku architektury mikroserwisowej i jest to proces, który wymaga czasu, dokładnych danych i szczegółowych informacji (zatówno o technicznej jak i biznesowej stronie).
- Każdy, kto pracuje trochę dłużej w IT wie, jak dużym ryzykiem jest przepisanie systemu od nowa. Jeśli ktoś nadal nie jest przekonany do tego - przytoczę przykład związany z tym samym start-upem, który budował wersję 3cią swojego serwisu i już go miał wprowadzać na produkcję, w tym momencie dołączyłem i zaproponowałem testy obciążeniowe nowej wersji. Wszystko się zawaliło - zmiany w systemie były rozległe, rozpoczynając od schemy, przez frameworki, strukturę API aż do implementacji klientów - nikt nie pomyślał przez 7 miesięcy tworzenia nowej wersji aby przetestować to rozwiązanie, czy wytrzyma niemałe, aktualne obciążenie które wytrzymuje stara, monolityczna i nieutrzymywalna wersja.
- Brzmi znajomo? W identyczny sposób boleśnie przekonali się o tym twórcy Wunderlista, polecam tą prezentację o tym, jak ciernista może być droga do architektury mikroserwisowej.

## BAJKA O ZŁOŻONOŚCI

- Nie wiem dlaczego osoby, które bardzo chętnie opowiadają o architekturze mikroserwisowej opowiadają tylko o zaletach.
- O tym, że można budować każdy serwis w innym języku, dobierać technologie pod konkretne zastosowania, dzielić zespoły według odpowiedzialności, o łatwości skalowania.
- Ci wszyscy "ewangeliści" pomijają wielkiego słonia, który jest w pokoju - budując architekturę mikroserwisową budujemy system rozproszony.
- Monitoring, deployment, szyny danych, protokoły, zarządzanie infrastrukturą, service discovery, latency, high-availability, consensus, consistency, współbieżność i błędy w systemach z nią związane, skalowanie UDP/TCP, caching, wersjonowanie API, bootstrapowanie nowego serwisu i wspólne biblioteki / standardy.
- Mój ulubiony żart na ten temat: jak robi się service discovery w monolicie? Dla tych co nie wiedzą co to, to po prostu serwis który dostarcza informacji o innych serwisach - gdzie się znajdują i np. jakie mają zasoby. *Autocomplete* w IDE. Albo tłumaczenie, dlaczego ten serwis działa tak wolno - przecież jest postawiony w US-west, a ja jestem w EU-east.
- Jeśli Twój zespół jest niedojrzały, nie ma odpowiedniego doświadczenia (zarówno jeśli chodzi o technikalia jak i odpowiednie nastawienie) będzie Ci bardzo ciężko zbudować coś solidnego i niezawodnego. Będziesz uczyć się na błędach i pożarach.
- Jak to mówi Martin Fowler - musisz być taki wysoki, aby robić mikroserwisy.
- Nie tylko zespół musi być gotowy - organizacja również, jeśli prośba o nowy serwer musi przejść przez 9 kręgów piekielnych organizacji i będzie to trwało najmniej tydzień, nawet nie próbuj się zabierać za tą architekturę, bo sam wylądujesz na 10 kręgu. Idealnie byłoby mieć na podorędziu zespół, który wie co to jest i aktywnie kultywuje kulturę DevOps oraz ludzi doświadczonych w obsłudze i zarządzaniu którąkolwiek z chmur.
- Wybierając tę architekturę musicie pamiętać, że wymieniacie przypadkową złożoność monolitu na złożoność esencjonalną związaną z systemem rozproszonym, w nagrodę dostając większe możliwości jeśli chodzi o podział obowiązków, skalowanie i elastyczność biznesową.
- Brałem udział w projekcie, który był niesamowicie doświadczony jeśli chodzi o tę tematykę, zajmował się również dość skomplikowaną (ale i ciekawą domeną), który pracował nad taką architekturą, mając doświadczonych programistów, chętnych do pracy w zgodzie z DevOps, i mając elastyczny dział związany z infrastrukturą, znający bardzo dobrze AWS.

## PODSUMOWANIE

- Mikroserwisy nie są odpowiedzią na wszystko, są tylko narzędziem, które w doświadczonych i dojrzałych rękach może pomóc.
- Tylko ewolucja, ściśle związana ze zbieraniem doświadczenia na temat domeny może Nas doprowadzić do szczęśliwego celu.
