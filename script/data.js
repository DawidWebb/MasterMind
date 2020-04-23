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
    this.showNumbers = [];
    this.clickNumbers = [];
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
