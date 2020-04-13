class CheckNr extends ShowNr {
  constructor(props) {
    super(props);
    this.divs.forEach((div) => {
      div.addEventListener("click", this.showEl);
    });
  }
  showEl = (e) => {
    console.log(e.target.textContent);
  };
}

const checkNr = new CheckNr();
