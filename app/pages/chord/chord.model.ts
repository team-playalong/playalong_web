export default class ChordModel {
  public autoScroll = {
    onSpeedChanged: value => {
      if (value) {
        this.autoScroll.speed += value;
      }
      else {
        this.autoScroll.speed = 0;
      }

    },
    speed: 0,
  };
};
