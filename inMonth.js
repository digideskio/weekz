'use strict'
var DAY_IN_MS = 1000 * 60 * 60 * 24

module.exports = function (year, month, startDay) {
  var firstOfMonth = new Date(Date.UTC(year, month, 1))
  var firstOfNextMonth = new Date(Date.UTC(year, month + 1, 1))
  var daysInMonth = (firstOfNextMonth.getTime() - firstOfMonth.getTime()) / DAY_IN_MS
  var nextWeekStart = 7 - firstOfMonth.getUTCDay() + (startDay || 0)
  var result = [{
    start: 1,
    end: nextWeekStart
  }]

  while (nextWeekStart < daysInMonth) {
    var next = {
      start: nextWeekStart + 1,
      end: nextWeekStart + 7
    }
    if (next.end > daysInMonth) {
      next.end = daysInMonth
    }
    result.push(next)
    nextWeekStart = next.end
  }

  return result
}
