'use strict'

var test = require('tap').test
var weekInMonthForDate = require('../inMonthForDate')

test('get week of 2015/03/21', function (t) {
  t.deepEqual(weekInMonthForDate(2015, 2, 21), {
    index: 2,
    start: 15,
    end: 21
  })
  t.end()
})

test('getting a week for non-existing date', function (t) {
  t.equal(weekInMonthForDate(2015, 2, 40), null)
  t.end()
})
