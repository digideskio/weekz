'use strict'
var fill = require('./fill.js')
module.exports = function dateInTZ (year, month, day, tz) {
  return new Date(
    fill(4, year) +
    '-' +
    fill(2, month + 1) +
    '-' +
    fill(2, day) +
    ' 00:00' +
    (tz || '')
  )
}
