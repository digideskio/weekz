'use strict'
const test = require('tap').test
const dateInTZ = require('../dateInTZ.js')

test('Get correct timezone offset', function (t) {
  t.equal(dateInTZ(2015, 1, 10, '+0700').getTimezoneOffset(), -60)
  t.end()
})

test('Make sure that times are correct', function (t) {
  t.equal(dateInTZ(2015, 1, 10, '+0700').toISOString(), '2015-02-09T17:00:00.000Z')
  t.end()
})
