class ShowColors extends Data {
  constructor(props) {
    super(props);
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomColors.bind(this));
    this.points = document.querySelector(".info__pkt");
    this.footInfo = document.querySelector(".foot__info");
    this.divs = document.querySelectorAll(".picture__quiz");
    this.divs = [...this.divs];
  }
  randomColors() {
    // this.drawColors = [
    //   { id: 0, color: "red" },
    //   { id: 1, color: "blue" },
    //   { id: 2, color: "green" },
    //   { id: 3, color: "black" },
    //   { id: 4, color: "yellow" },
    //   { id: 5, color: "orange" },
    //   { id: 6, color: "purple" },
    //   { id: 7, color: "grey" },
    //   { id: 8, color: "red" },
    //   { id: 9, color: "blue" },
    //   { id: 10, color: "green" },
    //   { id: 11, color: "black" },
    //   { id: 12, color: "yellow" },
    //   { id: 13, color: "orange" },
    //   { id: 14, color: "purple" },
    //   { id: 15, color: "grey" },
    // ];
    this.showNumbers = [];
    this.clickNumbers = [];
    this.winPoints = 0;
    this.points.textContent = `${this.winPoints}`;
    this.footInfo.textContent = "";
    this.divs.forEach((div) => {
      div.style.opacity = 1;
    });
    this.divs.forEach((div) => {
      let takeColor = Math.floor(Math.random() * this.drawColors.length);
      div.style.backgroundColor = `${this.drawColors[takeColor].color}`;
      div = {
        id: this.showNumbers.length,
        color: div.style.backgroundColor,
      };
      this.drawColors.splice(takeColor, 1);
      this.showNumbers.push(div);
      setTimeout(this.nonShow.bind(this), 2000);
    });
  }
  nonShow = () => {
    this.divs.forEach((div) => {
      div.style.backgroundColor = "transparent";
    });
  };
}

// const showNr = new ShowNr();
