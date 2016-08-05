'use strict'

var test = require('tap').test
var weeksInMonth = require('../inMonth')

test('weeks in 2015/01', function (t) {
  t.deepEqual(weeksInMonth(2015, 0), [
    { start: 1, end: 3 },
    { start: 4, end: 10 },
    { start: 11, end: 17 },
    { start: 18, end: 24 },
    { start: 25, end: 31 }
  ])
  t.end()
})

test('weeks in 2015/01 shift on monday', function (t) {
  t.deepEqual(weeksInMonth(2015, 0, 1), [
    { start: 1, end: 4 },
    { start: 5, end: 11 },
    { start: 12, end: 18 },
    { start: 19, end: 25 },
    { start: 26, end: 31 }
  ])
  t.end()
})

test('weeks in 2015/01 shift so the first is the start of the month', function (t) {
  t.deepEqual(weeksInMonth(2015, 0, 4), [
    { start: 1, end: 7 },
    { start: 8, end: 14 },
    { start: 15, end: 21 },
    { start: 22, end: 28 },
    { start: 29, end: 31 }
  ])
  t.end()
})

test('weeks in the short month 2015/02', function (t) {
  t.deepEqual(weeksInMonth(2015, 1), [
    { start: 1, end: 7 },
    { start: 8, end: 14 },
    { start: 15, end: 21 },
    { start: 22, end: 28 }
  ])
  t.end()
})
