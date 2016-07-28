'use strict'
var test = require('tap').test
var weeksInYear = require('../weeksInYear')

// From Wikipedia: https://en.wikipedia.org/wiki/ISO_week_date#Weeks_per_year
var exceptions = [
  4, 9, 15, 20, 26, 32, 37, 43, 48, 54, 60,
  65, 71, 76, 82, 88, 93, 99, 105, 111, 116, 122,
  128, 133, 139, 144, 150, 156, 161, 167, 172, 178, 184,
  189, 195, 201, 207, 212, 218, 224, 229, 235, 240, 246,
  252, 257, 263, 268, 274, 280, 285, 291, 296, 303, 308,
  314, 320, 325, 331, 336, 342, 348, 353, 359, 364, 370,
  376, 381, 387, 392, 398
]

function weekTest (year) {
  test('weeks of ' + year, function (t) {
    t.equal(weeksInYear(year), exceptions.indexOf(year % 400) !== -1 ? 53 : 52)
    t.end()
  })
}

for (var year = 1598; year < 2402; ++year) {
  weekTest(year)
}
