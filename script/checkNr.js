class CheckNr extends ShowNr {
  constructor(props) {
    super(props);
    // this.divs = document.querySelectorAll(".picture__quiz");
    this.divs = document.querySelectorAll(".picture__quiz");
    this.divs.forEach((div) => {
      div.addEventListener("click", this.checkColor(div));
    });
  }
  checkColor = (div) => {
    // console.log(div.textContent);
  };
}

const checkNr = new CheckNr();
