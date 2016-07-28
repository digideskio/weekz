[![Build Status](https://travis-ci.org/martinheidegger/weekz.svg?branch=master)](https://travis-ci.org/martinheidegger/weekz)
[![Coverage Status](https://coveralls.io/repos/github/martinheidegger/weekz/badge.svg?branch=master)](https://coveralls.io/github/martinheidegger/weekz?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# weekz - a little tool for dealing with weeks

Weeks are tricky units that are hard to iterate over years. This
little util helps to iterate over weeks in a month (like you often
do in a calendar display).

## Installation

Just use `npm` to install it

```
$ npm install weekz
```

## `weekz.parseWeek(yearAndWeek, [timeZone])`

The input `yearAndWeek` is a string that is parsed to a number. This is useful 
if you have the week in a url.

Get the information about a certain week in a year.
The week is timezone specific! _(in this example we ran it in GMT+0100)_

The default `timeZone` is the computers timezone. You can pass in a timezone using `+0000` format.


```javascript
var weekz = require('..')
var week = weekz.parseWeek('201603')
require('assert').deepEqual(week, {
   name: '201603',
   tz: undefined,
   start: new Date('Sun Jan 17 2016 00:00:00 GMT+0100'),
   end: new Date('Sun Jan 24 2016 00:00:00 GMT+0100'),
   next: '201604',
   nextYear: 2016,
   nextWeek: 4,
   prev: '201602',
   prevYear: 2016,
   prevWeek: 2
})
```

With `.getNext()` and `.getPrev()` you can get the next or previous week.

```javascript
var nextWeek = week.getNext()
require('assert').deepEqual(nextWeek, {
   name: '201604',
   tz: undefined,
   start: new Date('Sun Jan 24 2016 00:00:00 GMT+0100'),
   end: new Date('Sun Jan 31 2016 00:00:00 GMT+0100'),
   next: '201605',
   nextYear: 2016,
   nextWeek: 5,
   prev: '201603',
   prevYear: 2016,
   prevWeek: 3
})
```

## `weekz.getWeek(year, week, [timeZone])`

Alternative to `parseWeek`. To be used with numbers rather than strings, other 
than that the API is equal.

## `weekz.inYear(year)`

Tells you how many weeks a year has. Returns either `53` or `52`.

```javascript
var weekz = require('..')
require('assert').equal(weekz.inYear(2015), 53)
require('assert').equal(weekz.inYear(2016), 52)
```



