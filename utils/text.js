export default class Text {
  formatTime(seconds) {
    if (seconds < 60) {
      return seconds
    }
    else {
      return parseInt(seconds / 60, 10) + ':' + seconds % 60
    }
  }
}
