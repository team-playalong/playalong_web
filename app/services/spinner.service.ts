export default class Spinner {
  public isSpinnerActive;

  start() {
    this.isSpinnerActive = true;
  }

  stop() {
    this.isSpinnerActive = false;
  }
}
