'use strict'
var MS_PER_DAY = 1000 * 60 * 60 * 24
var MS_PER_WEEK = MS_PER_DAY * 7
var weeksInYear = require('./weeksInYear.js')
var dateInTZ = require('./dateInTZ.js')
var fill = require('./fill.js')

var weekProto = {
  getNext: function () {
    return parseWeek(this.next)
  },
  getPrev: function () {
    return parseWeek(this.prev)
  }
}

function parseWeek (weekInYear, tz) {
  var year = parseInt(weekInYear.substr(0, 4), 10)
  var week = parseInt(weekInYear.substr(4), 10)
  var weeks = weeksInYear(year)

  // Allow the week to exceed the weeks of the year
  while (week > weeks) {
    week -= weeks
    year += 1
    weeks = weeksInYear(year)
  }

  var result = Object.create(weekProto)
  result.name = fill(4, year) + fill(2, week)

  var firstDate = dateInTZ(year, 0, 1, tz)

  // On Sunday (firstDay == 0) the follow-up operation wouldn't be doing
  // anything. As optimization step we look for it.
  var firstDay = firstDate.getDay()
  var firstWeekStart = (firstDay === 0)
    ? firstDate
    : new Date(firstDate.getTime() - firstDay * MS_PER_DAY)

  result.start = new Date(firstWeekStart.getTime() + (week * MS_PER_WEEK))
  result.end = new Date(result.start.getTime() + MS_PER_WEEK)

  // Make sure that the beginning of the year is the first day
  // (week 00 starts at 1.1.)
  if (result.start < firstDate) {
    result.start = firstDate
  }

  var lastDate = new Date(dateInTZ(year + 1, 0, 1, tz).getTime() - MS_PER_DAY)

  // Make sure that the end of the last week is the last day of the year
  // (week 52/53 ends at 31.12.)
  if (result.end > lastDate) {
    result.end = lastDate
  }

  // Evaluating the next week. It should leap over year boundaries
  result.next = (result.end >= lastDate)
    ? fill(4, year + 1) + '00'
    : fill(4, year) + fill(2, week + 1)

  // The previous week should also leap over year boundaries.
  result.prev = (week === 0)
    ? fill(4, year - 1) + weeksInYear(year - 1)
    : fill(4, year) + fill(2, week - 1)

  return result
}

module.exports = parseWeek
