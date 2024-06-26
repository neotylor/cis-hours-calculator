Number.prototype.getWorkingHours = function () {
  const int = parseInt(this)
  const hours = Math.floor(Math.abs(int) / 60);
  const minutes = Math.floor(Math.abs(int) % 60);
  return { hours, minutes }
}
Number.prototype.calculateHours = function (totalDays) {
  const actualWorkingMinutes = totalDays * 8 * 60;
  const workingMinutes = parseInt(this)
  return workingMinutes - actualWorkingMinutes
}
String.prototype.extractTimes = function () {
  const regex = /(\d+ hrs, \d+ min)/g;
  const matches = this.match(regex);
  return matches || [];
}

export default {}