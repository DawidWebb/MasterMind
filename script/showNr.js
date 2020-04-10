class ShowNr extends Data {
  constructor(props) {
    super(props);

    this.headerBtn = document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
    this.divs = document.querySelectorAll("picture__quiz");
  }
  randomNumbers() {
    const numbers = Math.floor(Math.random(this.numbers) * this.numbers.length);
    console.log(numbers);
  }
}
const showNr = new ShowNr();
