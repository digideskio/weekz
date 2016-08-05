'use strict'
var test = require('tap').test
var weeksInYear = require('../inYear.js')

test('weeks', function (t) {
  t.deepEqual(weeksInYear(2019), [{
    start: { month: 0, date: 1 },
    end: { month: 0, date: 5 }
  }, {
    start: { month: 0, date: 2 },
    end: { month: 0, date: 8 }
  }, {
    start: { month: 0, date: 9 },
    end: { month: 0, date: 15 }
  }, {
    start: { month: 0, date: 16 },
    end: { month: 0, date: 22 }
  }, {
    start: { month: 0, date: 23 },
    end: { month: 0, date: 29 }
  }, {
    start: { month: 0, date: 30 },
    end: { month: 1, date: 5 }
  }, {
    start: { month: 1, date: 6 },
    end: { month: 1, date: 12 }
  }, {
    start: { month: 1, date: 13 },
    end: { month: 1, date: 19 }
  }, {
    start: { month: 1, date: 20 },
    end: { month: 1, date: 26 }
  }, {
    start: { month: 1, date: 27 },
    end: { month: 2, date: 5 }
  }, {
    start: { month: 2, date: 6 },
    end: { month: 2, date: 12 }
  }, {
    start: { month: 2, date: 13 },
    end: { month: 2, date: 19 }
  }, {
    start: { month: 2, date: 20 },
    end: { month: 2, date: 26 }
  }, {
    start: { month: 2, date: 27 },
    end: { month: 3, date: 2 }
  }, {
    start: { month: 3, date: 3 },
    end: { month: 3, date: 9 }
  }, {
    start: { month: 3, date: 10 },
    end: { month: 3, date: 16 }
  }, {
    start: { month: 3, date: 17 },
    end: { month: 3, date: 23 }
  }, {
    start: { month: 3, date: 24 },
    end: { month: 3, date: 30 }
  }, {
    start: { month: 4, date: 1 },
    end: { month: 4, date: 7 }
  }, {
    start: { month: 4, date: 8 },
    end: { month: 4, date: 14 }
  }, {
    start: { month: 4, date: 15 },
    end: { month: 4, date: 21 }
  }, {
    start: { month: 4, date: 22 },
    end: { month: 4, date: 28 }
  }, {
    start: { month: 4, date: 29 },
    end: { month: 5, date: 4 }
  }, {
    start: { month: 5, date: 5 },
    end: { month: 5, date: 11 }
  }, {
    start: { month: 5, date: 12 },
    end: { month: 5, date: 18 }
  }, {
    start: { month: 5, date: 19 },
    end: { month: 5, date: 25 }
  }, {
    start: { month: 5, date: 26 },
    end: { month: 6, date: 2 }
  }, {
    start: { month: 6, date: 3 },
    end: { month: 6, date: 9 }
  }, {
    start: { month: 6, date: 10 },
    end: { month: 6, date: 16 }
  }, {
    start: { month: 6, date: 17 },
    end: { month: 6, date: 23 }
  }, {
    start: { month: 6, date: 24 },
    end: { month: 6, date: 30 }
  }, {
    start: { month: 6, date: 31 },
    end: { month: 7, date: 6 }
  }, {
    start: { month: 7, date: 7 },
    end: { month: 7, date: 13 }
  }, {
    start: { month: 7, date: 14 },
    end: { month: 7, date: 20 }
  }, {
    start: { month: 7, date: 21 },
    end: { month: 7, date: 27 }
  }, {
    start: { month: 7, date: 28 },
    end: { month: 8, date: 3 }
  }, {
    start: { month: 8, date: 4 },
    end: { month: 8, date: 10 }
  }, {
    start: { month: 8, date: 11 },
    end: { month: 8, date: 17 }
  }, {
    start: { month: 8, date: 18 },
    end: { month: 8, date: 24 }
  }, {
    start: { month: 8, date: 25 },
    end: { month: 9, date: 1 }
  }, {
    start: { month: 9, date: 2 },
    end: { month: 9, date: 8 }
  }, {
    start: { month: 9, date: 9 },
    end: { month: 9, date: 15 }
  }, {
    start: { month: 9, date: 16 },
    end: { month: 9, date: 22 }
  }, {
    start: { month: 9, date: 23 },
    end: { month: 9, date: 29 }
  }, {
    start: { month: 9, date: 30 },
    end: { month: 10, date: 5 }
  }, {
    start: { month: 10, date: 6 },
    end: { month: 10, date: 12 }
  }, {
    start: { month: 10, date: 13 },
    end: { month: 10, date: 19 }
  }, {
    start: { month: 10, date: 20 },
    end: { month: 10, date: 26 }
  }, {
    start: { month: 10, date: 27 },
    end: { month: 11, date: 3 }
  }, {
    start: { month: 11, date: 4 },
    end: { month: 11, date: 10 }
  }, {
    start: { month: 11, date: 11 },
    end: { month: 11, date: 17 }
  }, {
    start: { month: 11, date: 18 },
    end: { month: 11, date: 24 }
  }, {
    start: { month: 11, date: 25 },
    end: { month: 11, date: 31 }
  }])
  t.end()
})

test('weeks in year where the last date is a single day of a week', function (t) {
  var weeks = weeksInYear(2016)
  t.deepEqual(weeks.pop(), {
    start: { month: 11, date: 31 },
    end: { month: 11, date: 31 }
  })
  t.deepEqual(weeks.pop(), {
    start: { month: 11, date: 24 },
    end: { month: 11, date: 30 }
  })
  t.end()
})

test('weeks in year where the last date is a single day of a week', function (t) {
  t.deepEqual(weeksInYear(2014).pop(), {
    start: { month: 11, date: 25 },
    end: { month: 11, date: 31 }
  })
  t.end()
})
