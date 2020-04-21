class CheckColors extends ShowColors {
  constructor(props) {
    super(props);

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
        this.wins.push(this.clickNumbers);
        this.clickNumbers = [];
        // this.showWins.bind(this);
      } else {
        setTimeout(this.showWait.bind(this), 200);
      }
    }
    this.showWins();
  };
  showWait = () => {
    this.divs[this.clickNumbers[0]].style.backgroundColor = "transparent";
    this.divs[this.clickNumbers[1]].style.backgroundColor = "transparent";
    this.clickNumbers = [];
  };
  showWins = () => {
    if (this.wins.length === this.divs.length / 2) {
      this.clickNumbers = [];
      this.divs.forEach((div) => {
        div.style.opacity = 0.3;
      });
      this.footInfo.textContent = `${
        this.winsInfo[
          Math.floor(Math.random(this.winsInfo) * this.winsInfo.length)
        ]
      }`;
    }
  };
}

const checkNr = new CheckColors();
