'use strict'
var getWeek = require('./getWeek')

module.exports = function parseWeek (weekInYear, tz) {
  return getWeek(
    parseInt(weekInYear.substr(0, 4), 10),
    parseInt(weekInYear.substr(4), 10),
    tz
  )
}
