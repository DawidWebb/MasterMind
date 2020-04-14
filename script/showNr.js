class ShowNr extends Data {
  constructor(props) {
    super(props);
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
    this.divs = document.querySelectorAll(".picture__quiz");
  }
  randomNumbers() {
    this.shownNumbers = [];
    this.point = 0;
    this.divs.forEach((div) => {
      div.textContent = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].id
      }`;
      div.style.backgroundColor = `${this.drawColors[div.textContent].color}`;
      this.shownNumbers.push(div.textContent);
      console.log(this.shownNumbers);
    });
    setTimeout(this.nonShow.bind(this), 2000);
  }
  nonShow = () => {
    this.divs.forEach((div) => {
      div.style.backgroundColor = "transparent";
    });
  };
}
// const showNr = new ShowNr();
