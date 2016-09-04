export function secondsToString(seconds) {
  var minutes = Math.floor(seconds / 60)
  var seconds = seconds - (minutes * 60)

  if (seconds < 10) {
    seconds = "0"+seconds
  }
  return minutes + ':' + seconds
}

export function stringToSeconds(time) {
  return 100
}
