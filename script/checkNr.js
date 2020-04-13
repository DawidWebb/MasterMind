class CheckNr extends ShowNr {
  constructor(props) {
    super(props);
    this.divs.forEach((div) => {
      div.addEventListener("click", this.showEl);
    });
  }
  showEl = (e) => {
    // console.log(e);
    let click = e.target.textContent;
    const targets = [];
    e.target.style.backgroundColor = `${
      this.drawColors[parseInt(e.target.textContent)].color
    }`;
    if (this.clickNumbers.length < 1) {
      this.clickNumbers.push(click);
      targets.push(e.target);
    } else if (this.clickNumbers.length === 1) {
      this.clickNumbers.push(click);
      targets.push(e.target);
      if (this.clickNumbers[0] === this.clickNumbers[1]) {
        this.clickNumbers = [];
      } else {
        alert("Niee");
        targets.forEach((target) => {
          target.style.backgroundColor = "transparent";
        });
        this.clickNumbers = [];
      }
    } else {
      return;
    }
    // console.log(this.clickNumbers);
  };
}

const checkNr = new CheckNr();
