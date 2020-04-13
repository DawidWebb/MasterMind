class ShowNr extends Data {
  constructor(props) {
    super(props);
    // this.checkNr = new CheckNr();
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
    this.divs = document.querySelectorAll(".picture__quiz");
    this.i;
  }
  randomNumbers() {
    this.shownNumbers = [];
    for (this.i = 0; this.i < this.divs.length; this.i++) {
      this.divs[this.i].textContent = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].id
      }`;

      this.divs[this.i].style.backgroundColor = `${
        this.drawColors[this.divs[this.i].textContent].color
      }`;
    }
    for (this.i = 0; this.i < this.divs.length; this.i++) {
      this.shownNumbers.push(this.divs[this.i].textContent);
    }
  }
}
// const showNr = new ShowNr();
