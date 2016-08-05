'use strict'

var test = require('tap').test
var index = require('../index.js')
var glob = require('glob')
var path = require('path')

test('all files should be available as property', function (t) {
  glob('*.js', {cwd: path.join(__dirname, '..')}, function (err, paths) {
    if (err) {
      t.fail(err)
    }
    t.deepEqual(Object.keys(index), paths.map(function (path) {
      return /(.*)\.js$/.exec(path)[1]
    }).filter(function (path) {
      return path !== 'index'
    }))
    t.end()
  })
})
