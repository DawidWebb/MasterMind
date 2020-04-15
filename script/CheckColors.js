class CheckColors extends ShowColors {
  constructor(props) {
    super(props);
    this.points = document.querySelector(".info__pkt");
    this.divs.forEach((div) => {
      div.addEventListener("click", this.drawColor);
    });
  }
  drawColor = (e) => {
    e.target.style.backgroundColor = `${
      this.showNumbers[this.divs.indexOf(e.target)].color
    }`;
    this.clickNumbers.push(this.divs.indexOf(e.target));

    this.checkDiff();
  };
  checkDiff = () => {
    if (this.clickNumbers.length === 2) {
      if (
        this.showNumbers[this.clickNumbers[0]].color ===
        this.showNumbers[this.clickNumbers[1]].color
      ) {
        this.clickNumbers = [];
      } else {
        setTimeout(this.showWait.bind(this), 200);
      }
    }
  };
  showWait = () => {
    this.divs[this.clickNumbers[0]].style.backgroundColor = "transparent";
    this.divs[this.clickNumbers[1]].style.backgroundColor = "transparent";
    this.clickNumbers = [];
  };
}

const checkNr = new CheckColors();
