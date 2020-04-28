class Data {
  constructor() {
    this.infoPkt = document.querySelector(".info__pkt");
    this.drawColors = [
      { id: 0, color: "red" },
      { id: 1, color: "blue" },
      { id: 2, color: "green" },
      { id: 3, color: "black" },
      { id: 4, color: "yellow" },
      { id: 5, color: "orange" },
      { id: 6, color: "purple" },
      { id: 7, color: "grey" },
      { id: 8, color: "red" },
      { id: 9, color: "blue" },
      { id: 10, color: "green" },
      { id: 11, color: "black" },
      { id: 12, color: "yellow" },
      { id: 13, color: "orange" },
      { id: 14, color: "purple" },
      { id: 15, color: "grey" },
    ];
    this.winsInfo = [
      "!!!WYGRANA!!! -- Brawo!",
      "!!!WYGRANA!!! -- Jesteś niesamowita/ty!!!",
      "!!!WYGRANA!!! -- Ale masz super pamięć!",
      "!!!WYGRANA!!! -- Świetnie...jeszcze raz?",
      "!!!WYGRANA!!! -- No to sie nazywa gracz:)",
    ];

    this.winsInfo2 = [
      "Istnieje gatunek meduz (Turritopsis dohrnii), który uważany jest za nieśmiertelny. Organizmy tych zwierząt potrafią świetnie regenerować komórki swojego ciała, zamieniając je na inny typ (transdyferencjacja).",
      "Pszczoły potrafią tańczyć. Poprzez zataczane w powietrzu okręgi sygnalizują nowe źródło pyłku czy nektaru.",
      "Niektóre gatunki jaszczurek bazyliszków potrafią przebiec po wodzie długie dystanse, gdy uciekają przed drapieżnikiem, dlatego potocznie nazywane są jaszczurkami Jezusa Chrystusa.",
      "Wielbłądy to zwierzęta bardzo dobrze gospodarujące wodą we własnych organizmach. Tolerują ubytek wody nawet do 30% masy ciała.",
      "To kozy były pierwszymi zwierzętami, którymi opiekowali się ludzie już ponad 9000 lat temu",
      "Prawdopodobnie nie istnieją dwa identycznie nakrapiane tygrysy, ponieważ paski zdobią zarówno ich futra jak i skórę i są unikalne dla każdego osobnika.",
      "Siła nóg tygrysa jest tak wielka, że nawet gdy zwierzę umiera, są one w stanie utrzymać jego martwe ciało w pionie.",
      "Ponoć, aby uniknąć zaciśnięcia się szczęk i połknięcia przez krokodyla, wystarczy wcisnąć palec w jego oko.",
      "Supermocą pcheł jest ich zdolność do przeskoczenia odległości wynoszącej ponad 200 razy więcej od wysokości ich ciała.",
      "Choć motyle posiadają dwoje oczu, które wyposażone są w tysiące soczewek, to widzą niewiele kolorów – zaledwie zielony, żółty i czerwony.",
      "W temacie oczu specjalistami są ślimaki, które potrafią zregenerować oko, jeśli je stracą.",
      "Najbardziej popularną rasą psa jest labrador. Jego łagodna natura, energiczność i inteligencja wykorzystywane są w służbach policyjnych, a także przy pomocy niesionej osobom niepełnosprawnym. Są to również psy, które potrafią utrzymywać świetne relacje z dziećmi.",
      "Psy i koty można zidentyfikować po niepowtarzalnym odcisku nosa.",
      "Niektóre ze zwierząt potrafią liczyć. Należą do nich szympansy, kanarki i łyski. Ptaki potrafią na przykład stwierdzić, czy i ile jaj zostało podrzuconych do ich gniazda.",
      "Wiewiórki są sadownikami z przypadku. Zagrzebując nasiona w ziemi, często zapominają ich dokładnej lokalizacji, przez co zasadzają mnóstwo nowych drzew.",
      "Owce potrafią wyleczyć u siebie bóle brzucha i zakażenie pasożytami jelitowymi. Zmieniając dietę i poszukując roślin, w których składzie znajduje się saponina i tanina, pozbywają się nieprzyjemnych dolegliwości.",
      "Lamparty mogą biec z prędkością 58 km/h.",
      "Słonie mogą spędzać aż 16 godzin dziennie, jedynie jedząc. Dzieje się tak, gdyż są one roślinożercami, a ich organizmy wymagają przyswojenia sporych ilości pokarmu, aby zaspokoić głód.",
      "Słonie potrafią odnaleźć wodę poprzez zmysł węchu już z odległości 3 mil.",
      "Słonie są zdolne do empatii zarówno dla własnego gatunku jak i innych zwierząt. Znane są przypadki, gdy zwierzęta te pocieszały innych osobników swojego gatunku lub opłakiwały swoich towarzyszy (niekoniecznie tego samego gatunku).",
      "Szympansy są najbardziej inteligentnymi z naczelnych zwierząt. Potrafią rozmawiać, używając mimiki i modulacji głosem. Często wykorzystują również przeróżne gesty, aby oznajmić swój nastrój lub zamiary.",
      "Jednym z największych drapieżników na planecie jest orzeł, którego rozpiętość skrzydeł może sięgać 2 metrów.",
      "Lamparty potrafią również wykonać 6-metrowy skok.",
      "Kolana flamingów nie zaginają się w odwrotną stronę niż na przykład u człowieka. To tylko wrażenie. Tak naprawdę kolana u tych zwierząt znajdują się tuż pod upierzeniem, natomiast to, co mylnie określamy tym mianem, jest w rzeczywistości stawem skokowym.",
      "Niedźwiedzie polarne tak naprawdę wcale nie są białe. Ich skóra przybiera kolor czarny, natomiast futro przezroczysty. Tylko gra światła odbijanego przez liczne włosy sprawia wrażenie, że futro ma kolor biały.",
      "Orki mogą zjadać dziennie nawet 227 kg jedzenia złożonego z ryb, fok, pingwinów, kałamarnic czy żółwi morskich.",
      "Zęby bobrów rosną nieustannie, dlatego zwierzęta te muszą ścierać je o różne obiekty.",
      "Mrówki nie posiadają płuc i niepotrzebny jest im sen.",
      "Na każdego człowieka na planecie przypada odpowiednio około milion mrówek.",
      "Język żyrafy jest dwukolorowy: niebiesko-czarny.",
      "Szyja żyrafy może osiągać długość nawet 4 do 5 metrów.",
      " Ciąża żyraf trwa aż około 15 miesięcy.",
      "Żyrafy śpią jedynie godzinę do dwóch w ciągu dnia.",
      "Żyrafi język jest na tyle długi, że ta może nim sięgnąć do uszu, chociażby po to, aby je wyczyścić.",
      "Wiek u żyraf ma znaczenie w stosunku do ich ubarwienia. Ich skóra ciemnieje pod wpływem upływu lat.",
      "Renifer jest jedynym gatunkiem jeleniowatych, u którego występuje poroże u obu płci: zarówno samców jak i samic.",
      "Wydawane przez pumę dźwięki można przyrównać do pomruku włączonego motocykla.",
      "Króliki posiadają bardzo przydatną w walce z drapieżnikiem zdolność. Chodzi o panoramiczne widzenie czyli takie w zakresie 360 stopni.",
    ];
    this.showNumbers = [];
    this.clickNumbers = [];
    this.winNubmers = [];
    this.winPoints = 0;
    this.wins = [];

    this.time = 0;
    this.active = false;
    this.idI;
    this.points = [];

    this.game();
    this.timer();
    this.start();
    this.reset();
  }
  game = () => {
    clearInterval(this.idI);
  };

  timer = () => {
    clearInterval(this.idI);
    this.reset();
    this.idI = setInterval(this.start, 10);
  };

  start = () => {
    this.time++;
    this.infoPkt.textContent = (this.time / 100).toFixed(2);
  };

  reset = () => {
    this.points = [];
    this.time = 0;
    this.infoPkt.textContent = "---";
    this.active = false;
    clearInterval(this.idI);
  };
}
