class ShowColors extends Data {
  constructor(props) {
    super(props);
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomColors.bind(this));
    this.divs = [...document.querySelectorAll(".picture__quiz")];
  }
  randomColors() {
    this.divs.forEach((div) => {
      (div.style.backgroundColor = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].color
      }`),
        (div = {
          id: this.showNumbers.length,
          color: div.style.backgroundColor,
          isClicked: false,
          isCorrect: false,
        });
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
