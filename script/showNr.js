class ShowNr extends Data {
  constructor(props) {
    super(props);

    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
    this.divs = document.querySelectorAll(".picture__quiz");
  }
  randomNumbers() {
    let i;

    for (i = 0; i < this.divs.length; i++) {
      this.divs[i].style.backgroundColor = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].color
      }`;
    }
    const checkNr = new CheckNr();
  }
}
const showNr = new ShowNr();
