class Time {
  constructor() {
    this.timeShow = document.querySelector(".info__pkt");
    this.time = 0;
    this.timeInfo;
  }
  timeStart = () => {
    this.timeInfo = setInterval(this.timeUp, 100);
  };
  timeUp = () => {
    this.time++;
    this.timeShow.textContent = (this.time / 100).toFixed(2);
  };
  timeStop = () => {
    this.time = 0;
    clearInterval(this.timeInfo);
  };
}
