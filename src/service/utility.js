Number.prototype.getWorkingHours = function (toString) {
  const int = parseInt(this)
  const hours = Math.floor(Math.abs(int) / 60);
  const minutes = Math.floor(Math.abs(int) % 60);
  if (toString) return `${hours} Hours, ${minutes} minutes`;
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

function parseTimeString(timeStr) {
  const [hours, minutes] = timeStr.split(',').map(part => parseInt(part.match(/\d+/)[0], 10));
  return hours * 60 + minutes;
}

String.prototype.compareTimes = function () {
  const referenceTime = '8 hrs, 0 min';
  const referenceMinutes = parseTimeString(referenceTime);
  const givenMinutes = parseTimeString(this);

  if (givenMinutes > referenceMinutes) {
    return { msg: `Ahead by ${(givenMinutes - referenceMinutes).getWorkingHours(true)}.`, status: 'table-success' };
  } else if (givenMinutes < referenceMinutes) {
    return { msg: `Behind by ${(referenceMinutes - givenMinutes).getWorkingHours(true)}.`, status: 'table-danger' };
  } else {
    return { msg: 'No Ahead/Behind', status: '' } ;
  }
}

export default {}