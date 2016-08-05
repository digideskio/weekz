'use strict'

var test = require('tap').test
var weekInYearForDate = require('../inYearForDate')

test('get week in year of 2015/03/21', function (t) {
  t.deepEqual(weekInYearForDate(2015, 2, 21), {
    start: {
      month: 2,
      date: 20
    },
    end: {
      month: 2,
      date: 26
    },
    index: 12
  })
  t.end()
})

test('get week in year of 2015/03/30 because its covers the last week of a month', function (t) {
  t.deepEqual(weekInYearForDate(2015, 2, 30), {
    start: {
      month: 2,
      date: 27
    },
    end: {
      month: 3,
      date: 2
    },
    index: 13
  })
  t.end()
})

test('get week in year of 2015/03/01 because its covers the first week of a month', function (t) {
  t.deepEqual(weekInYearForDate(2015, 2, 1), {
    start: {
      month: 1,
      date: 27
    },
    end: {
      month: 2,
      date: 5
    },
    index: 9
  })
  t.end()
})

test('getting a week for non-existing date', function (t) {
  t.equal(weekInYearForDate(2015, 2, 40), null)
  t.end()
})

test('getting a week for non-existing month', function (t) {
  t.equal(weekInYearForDate(2015, 12, 40), null)
  t.end()
})

test('getting a week for invalid date', function (t) {
  t.equal(weekInYearForDate(2015, 11, -1), null)
  t.end()
})
