class CheckColors extends ShowColors {
  constructor(props) {
    super(props);

    this.divs.forEach((div) => {
      div.addEventListener("click", this.drawColor, true);
    });
  }
  drawColor = (e) => {
    e.target.style.backgroundColor = `${
      this.showNumbers[this.divs.indexOf(e.target)].color
    }`;
    this.clickNumbers.push(this.divs.indexOf(e.target));
    this.winNubmers.push(this.divs.indexOf(e.target));
    this.checkDiff();
    console.log(this.winNubmers);
  };
  checkDiff = () => {
    if (this.clickNumbers.length === 2) {
      if (
        this.showNumbers[this.clickNumbers[0]].color ===
        this.showNumbers[this.clickNumbers[1]].color
      ) {
        this.wins.push(this.clickNumbers);
        this.clickNumbers = [];
        this.divs[this.winNubmers[0]].removeEventListener(
          "click",
          this.drawColor,
          true
        );
        this.divs[this.winNubmers[1]].removeEventListener(
          "click",
          this.drawColor,
          true
        );
        this.winNubmers = [];
      } else {
        setTimeout(this.showWait.bind(this), 200);
        this.winNubmers = [];
      }
      console.log(this.wins);
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
      this.game();
      this.divs.forEach((div) => {
        div.style.opacity = 0.3;
      });
      this.footInfo.textContent = `${
        this.winsInfo2[
          Math.floor(Math.random(this.winsInfo2) * this.winsInfo2.length)
        ]
      }`;
    }
  };
}

const checkNr = new CheckColors();
