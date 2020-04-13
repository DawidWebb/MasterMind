class CheckNr extends ShowNr {
  constructor(props) {
    super(props);
    this.divs.forEach((div) => {
      div.addEventListener("click", this.showEl);
    });
  }
  showEl = (e) => {
    console.log(e);
    let click = e.target.textContent;
    e.target.style.backgroundColor = `${
      this.drawColors[parseInt(e.target.textContent)].color
    }`;
    if (this.clickNumbers.length < 1) {
      this.clickNumbers.push(click);
    } else if (this.clickNumbers.length === 1) {
      this.clickNumbers.push(click);
      if (this.clickNumbers[0] === this.clickNumbers[1]) {
        // alert("Hurra!");
        this.clickNumbers = [];
      } else {
        // alert("Niee");
        this.clickNumbers = [];
        this.divs.forEach((div) => (div.style.backgroundColor = "transparent"));
      }
    } else {
      return;
    }
    console.log(this.clickNumbers);
  };
}

const checkNr = new CheckNr();
