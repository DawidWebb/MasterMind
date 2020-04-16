class ShowColors extends Data {
  constructor(props) {
    super(props);
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomColors.bind(this));
    this.points = document.querySelector(".info__pkt");
    this.footInfo = document.querySelector(".foot__info");
    this.divs = [...document.querySelectorAll(".picture__quiz")];
  }
  randomColors() {
    this.showNumbers = [];
    this.clickNumbers = [];
    this.winPoints = 0;
    this.points.textContent = `${this.winPoints}`;
    this.footInfo.textContent = "";
    this.divs.forEach((div) => {
      div.style.opacity = 1;
    });
    this.divs.forEach((div) => {
      div.style.backgroundColor = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].color
      }`;
      div = {
        id: this.showNumbers.length,
        color: div.style.backgroundColor,
      };

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
