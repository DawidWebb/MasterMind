class ShowNr extends Data {
  constructor(props) {
    super(props);
    // this.checkNr = new CheckNr();
    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
    this.divs = document.querySelectorAll(".picture__quiz");
    this.div = this.div;
  }
  randomNumbers() {
    this.shownNumbers = [];

    this.divs.forEach((div) => {
      div.textContent = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].id
      }`;
      div.style.backgroundColor = `${this.drawColors[div.textContent].color}`;
      this.shownNumbers.push(div.textContent);
    });
    // console.log(this.shownNumbers);
  }
}
// const showNr = new ShowNr();
