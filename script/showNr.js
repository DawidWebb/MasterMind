class ShowNr extends Data {
  constructor(props) {
    super(props);
    this.first = document.querySelector(".showNumbers__first");
    this.sign1 = document.querySelector(".showNumbers__sign1");
    this.second = document.querySelector(".showNumbers__second");
    this.sign2 = document.querySelector(".showNumbers__sign2");
    this.third = document.querySelector(".showNumbers__third");
    document
      .querySelector(".header__btn")
      .addEventListener("click", this.randomNumbers.bind(this));
  }
  randomNumbers() {
    console.log("OK");
  }
}
const showNr = new ShowNr();
