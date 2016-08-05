'use strict'
var weeksInMonth = require('./inMonth.js')

module.exports = function weeksByMonth (year, startDay) {
  var result = []
  for (var i = 0; i < 12; ++i) {
    result.push(weeksInMonth(year, i, startDay))
  }
  return result
}
