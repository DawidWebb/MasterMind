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
