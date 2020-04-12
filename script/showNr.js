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
      this.divs[i].textContent = `${
        this.drawColors[
          Math.floor(Math.random(this.drawColors) * this.drawColors.length)
        ].id
      }`;

      this.divs[i].style.backgroundColor = `${
        this.drawColors[this.divs[i].textContent].color
      }`;
      this.shownNumbers.push(this.divs[i].textContent);
      console.log(this.shownNumbers);
      console.log(this.shownNumbers[15]);
    }

    const checkNr = new CheckNr();
  }
}
const showNr = new ShowNr();
