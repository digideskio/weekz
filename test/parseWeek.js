'use strict'
var test = require('tap').test
var parseWeek = require('../parseWeek')
var weeksInYear = require('../weeksInYear')

test('starting of first week is always the 1. of january', function (t) {
  for (var year = 2000; year < 2025; ++year) {
    t.equal(
      parseWeek(year + '00').start.toISOString(),
      new Date(year, 0, 1).toISOString()
    )
  }
  t.end()
})

test('end of the last week is always the 31. of december', function (t) {
  for (var year = 2000; year < 2025; ++year) {
    var weeks = weeksInYear(year)
    t.equal(
      parseWeek(String(year) + weeks).end.toISOString(),
      new Date(year, 11, 31).toISOString()
    )
  }
  t.end()
})

test('get start of time in different time zone', function (t) {
  t.equal(
    parseWeek('201500', '+1200').start.toISOString(),
    '2014-12-31T12:00:00.000Z'
  )
  t.end()
})

test('incrementing over year limits', function (t) {
  t.equal(
    parseWeek('201576').start.toISOString(),
    parseWeek('201623').start.toISOString()
  )
  t.end()
})

test('incrementing over negativeyear limits', function (t) {
  t.equal(
    parseWeek('2015-76').start.toISOString(),
    parseWeek('201328').start.toISOString()
  )
  t.end()
})

test('previous week', function (t) {
  t.equal(parseWeek('202000').prev, '201952')
  t.equal(parseWeek('202100').prev, '202053')
  t.equal(parseWeek('202101').prev, '202100')
  t.end()
})

test('get previous week', function (t) {
  t.deepEqual(parseWeek('20200').getPrev(), {
    name: '201952',
    prevYear: 2019,
    prevWeek: 51,
    nextYear: 2020,
    nextWeek: 0,
    start: new Date(2019, 11, 29),
    end: new Date(2019, 11, 31),
    tz: null
  })
  t.end()
})

test('get next week', function (t) {
  t.deepEqual(parseWeek('20200').getNext(), {
    name: '202001',
    prevYear: 2020,
    prevWeek: 0,
    nextYear: 2020,
    nextWeek: 2,
    start: new Date(2020, 0, 5),
    end: new Date(2020, 0, 12),
    tz: null
  })
  t.end()
})

test('previous week', function (t) {
  t.equal(parseWeek('202000').prev, '201952')
  t.equal(parseWeek('202100').prev, '202053')
  t.equal(parseWeek('202101').prev, '202100')
  t.end()
})

test('next week', function (t) {
  t.equal(parseWeek('201952').next, '202000')
  t.equal(parseWeek('202000').next, '202001')
  t.equal(parseWeek('202053').next, '202100')
  t.end()
})

