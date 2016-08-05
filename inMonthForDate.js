'use strict'

var inMonth = require('./inMonth.js')

module.exports = function weekInMonthForDate (year, month, date, startDay) {
  var weeks = inMonth(year, month, startDay)
  for (var i = 0; i < weeks.length; i++) {
    var week = weeks[i]
    if (week.start <= date && date <= week.end) {
      week.index = i
      return week
    }
  }
  return null
}
