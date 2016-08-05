'use strict'

var DAY_IN_MS = 1000 * 60 * 60 * 24

module.exports = function weeksInYear (year, startDay) {
  var date = new Date(Date.UTC(year, 0, 1))
  var firstOfNextYear = new Date(Date.UTC(year + 1, 0, 0))
  var day = 7 - date.getUTCDay() + (startDay || 0)
  var result = [{
    start: {
      month: 0,
      date: 1
    },
    end: {
      month: 0,
      date: day
    }
  }]

  while (date.valueOf() < firstOfNextYear) {
    date.setTime(date.getTime() + 1 * DAY_IN_MS)
    var next = {
      start: {
        month: date.getMonth(),
        date: date.getDate()
      }
    }
    date.setTime(date.getTime() + 6 * DAY_IN_MS)
    if (date.valueOf() > firstOfNextYear) {
      next.end = {
        month: 11,
        date: 31
      }
    } else {
      next.end = {
        month: date.getMonth(),
        date: date.getDate()
      }
    }
    result.push(next)
  }

  return result
}
