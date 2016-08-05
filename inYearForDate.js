'use strict'

var inYear = require('./inYear.js')

module.exports = function weekInYearForDate (year, month, date, startDay) {
  if (date < 1) {
    return null
  }
  if (month > 11 || month < 0) {
    return null
  }
  var lastDateOfMonth = new Date(Date.UTC(year, month + 1, 0) - 1).getUTCDate()
  if (date > lastDateOfMonth) {
    return null
  }
  var weeks = inYear(year, startDay)
  for (var i = 0; i < weeks.length; i++) {
    var week = weeks[i]
    if (week.start.month === month) {
      if (week.end.month === month) {
        if (week.start.date <= date && date <= week.end.date) {
          week.index = i
          return week
        }
      } else {
        week.index = i
        return week
      }
    } else if (week.end.month === month && date <= week.end.date) {
      week.index = i
      return week
    }
  }
}
