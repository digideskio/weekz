'use strict'
var test = require('tap').test
var dateInTZ = require('../dateInTZ.js')

test('Make sure that times are correct', function (t) {
  t.equal(dateInTZ(2015, 1, 10, '+0700').toISOString(), '2015-02-09T17:00:00.000Z')
  t.end()
})
