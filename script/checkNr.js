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
    let color = `${this.drawColors[parseInt(click)].color}`;
    const targets = [];
    e.target.style.backgroundColor = color;
    this.clickNumbers.push(click);
    if (
      this.clickNumbers.length === 2 &&
      this.clickNumbers[0] === this.clickNumbers[1]
    ) {
      this.shownNumbers.splice(`${this.clickNumbers[0]}`, 1);
      this.shownNumbers.splice(`${this.clickNumbers[1]}`, 1);
      this.point = this.point + 2;
      this.points.textContent = `${this.point}`;
      this.clickNumbers = [];
    } else if (
      this.clickNumbers.length === 2 &&
      this.clickNumbers[0] !== this.clickNumbers[1]
    ) {
      let one = this.clickNumbers[0];
      let two = this.clickNumbers[1];
      this.divs[one].style.backgroundColor = "transparent";
      this.divs[two].style.backgroundColor = "transparent";
      this.clickNumbers = [];
    }
  };
}
const checkNr = new CheckNr();
