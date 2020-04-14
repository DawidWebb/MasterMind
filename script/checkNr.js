class CheckNr extends ShowNr {
  constructor(props) {
    super(props);
    this.divs.forEach((div) => {
      div.addEventListener("click", this.showEl);
    });
    this.points = document.querySelector(".info__pkt");
    this.points.textContent = `${this.point}`;
  }
  showEl = (e) => {
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
        this.point = this.point + 2;
        this.points.textContent = `${this.point}`;
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
