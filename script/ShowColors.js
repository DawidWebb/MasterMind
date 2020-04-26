class ShowColors extends Data {
  constructor(props) {
    super(props);
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomColors.bind(this));

    this.footInfo = document.querySelector(".foot__info");
    this.divs = document.querySelectorAll(".picture__quiz");
    this.divs = [...this.divs];
  }
  randomColors() {
    this.divs.forEach((div) => {
      div.addEventListener("click", this.drawColor, true);
    });
    this.timer();
    const newColors = this.drawColors.slice(0, this.drawColors.length);
    this.showNumbers = [];
    this.clickNumbers = [];
    this.wins = [];
    this.footInfo.textContent = "";
    this.divs.forEach((div) => {
      div.style.opacity = 1;
      div.style.backgroundColor = "white";
    });
    this.divs.forEach((div) => {
      let takeColor = Math.floor(Math.random() * newColors.length);
      div.style.backgroundColor = `${newColors[takeColor].color}`;
      div = {
        id: this.showNumbers.length,
        color: div.style.backgroundColor,
      };
      newColors.splice(takeColor, 1);
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
