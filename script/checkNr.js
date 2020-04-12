class CheckNr extends ShowNr {
  constructor(props) {
    super(props);

    this.divs = document.addEventListener("click", this.checkColor.bind(this));
  }
  checkColor() {
    console.log("ok");
  }
}
