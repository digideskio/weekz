[![Build Status](https://travis-ci.org/martinheidegger/weekz.svg?branch=master)](https://travis-ci.org/martinheidegger/weekz)
[![Coverage Status](https://coveralls.io/repos/github/martinheidegger/weekz/badge.svg?branch=master)](https://coveralls.io/github/martinheidegger/weekz?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# weekz - a little tool for dealing with weeks

Weeks are tricky units that are hard to iterate over years. This
little util helps to iterate over weeks in a month (like you often
do in a calendar display).

## Installation

Just use `npm` to install it:

```
$ npm install weekz
```

## About the implementation

Weeks are tricky to implement if you use moment.js or Date instances to evaluate them. This is because timestamps are intrinsically bound to
timezones, but weeks are not. This library will allow you to get the
weeks of a month or a year in a fashion that should make it easy for to
put in a calendar or iterate over them.

This package is made to be as simple as possible. It comes without 
dependencies and it returns only the necessary information. I.e.:

`weekz.inMonth(2015, 0)` will return an array with each entry having a `{start: 1, end: 3}`-like object. It will not reiterate which index a week
has or which month it is because you should have this information already
when calling the method.

This package has been implemented with code-size in mind: You can require
each method both like `require('weekz').inMonth` or `require('weekz/inMonth')`.

## `weekz.inMonth(year, month[, startDay])`

A getter for the weeks that are within the specified month. The weeks will include the start `date` and end `date`. 

- `year` ... an integer like `2016` for the year of 2016.
- `month` ... an integer between `0` and `11` for the month of the year.
- `startDay` ... an integer between `0` and `6` for the day at which the week 
    starts `0`=Sunday, `1`=Monday, etc. _default is `0` ... Sunday_

```javascript
var weekz = require('..')
var weeks = weekz.inMonth(2015, 0, 0)
/*
[
  { start: 1, end: 3 },
  { start: 4, end: 10 },
  { start: 11, end: 17 },
  { start: 18, end: 24 },
  { start: 25, end: 31 }
]
*/
```


## `weekz.inMonthForDate(year, month, date[, startDay])`

For implementing a calendar it is often good to know in what week a particular 
date lies. This method gives you the week of a month for a particular date.

The resulting week will have an `index` property that indicates which week
of the month is found. `0` up to `4`.

**Note:** If the date is invalid it will return `null` because no week is
found to match it!

- `year` ... an integer like `2016` for the year of 2016.
- `month` ... an integer between `0` and `11` for the month of the year.
- `date` ... the date of the month starting with `1` up to `31`.
- `startDay` ... an integer between `0` and `6` for the day at which the week 
     starts `0`=Sunday, `1`=Monday, etc. _default is `0` ... Sunday_

```javascript
var weekz = require('weekz')
var week = weekz.inMonthForDate(2015, 0, 10, 0)
/*
{ start: 4, end: 10, index: 1 }
*/
```

## `weekz.inYear(year[, startDay])`

Weeks can also be counted from the start of the year. This way the first week 
is starting from the first of january and interates through to the end of the 
year.

- `year` ... an integer like `2016` for the year of 2016.
- `startDay` ... an integer between `0` and `6` for the day at which the week 
     starts `0`=Sunday, `1`=Monday, etc. _default is `0` ... Sunday_

```javascript
var weekz = require('weekz')
var weeks = weekz.inYear(2015, 0)
/*
[
  { start: { month: 0, date: 1 }, end: { month: 0, date: 3 } },
  { start: { month: 0, date: 2 }, end: { month: 0, date: 8 } },
  { start: { month: 0, date: 9 }, end: { month: 0, date: 15 } },
  { start: { month: 0, date: 16 }, end: { month: 0, date: 22 } },
  { start: { month: 0, date: 23 }, end: { month: 0, date: 29 } },
  { start: { month: 0, date: 30 }, end: { month: 1, date: 5 } },
  { start: { month: 1, date: 6 }, end: { month: 1, date: 12 } },
  { start: { month: 1, date: 13 }, end: { month: 1, date: 19 } },
  { start: { month: 1, date: 20 }, end: { month: 1, date: 26 } },
  ....
  { start: { month: 11, date: 4 }, end: { month: 11, date: 10 } },
  { start: { month: 11, date: 11 }, end: { month: 11, date: 17 } },
  { start: { month: 11, date: 18 }, end: { month: 11, date: 24 } },
  { start: { month: 11, date: 25 }, end: { month: 11, date: 31 } }
]
*/
```

## `weekz.inYearForDate(year, month, date[, startDay])`

For implementing a calendar it is often good to know in what week a particular 
date lies. This method gives you the week of a year for a particular date.

The resulting week will have an `index` property that indicates which week
of the year is found. `0` up to `52` (depending on the year).

**Note:** If the date is invalid it will return `null` because no week is
found to match it!

- `year` ... an integer like `2016` for the year of 2016.
- `month` ... an integer between `0` and `11` for the month of the year.
- `date` ... the date of the month starting with `1` up to `31`.
- `startDay` ... an integer between `0` and `6` for the day at which the week 
     starts `0`=Sunday, `1`=Monday, etc. _default is `0` ... Sunday_

```javascript
var weekz = require('weekz')
var week = weekz.inYearForDate(2015, 0, 10, 0)
/*
{ start: 4, end: 10, index: 1 }
*/
```
## `weekz.byMonth(year[, startDay])`

You might need to iterate over they weeks in a year split by month. This
method returns just that.

- `year` ... an integer like `2016` for the year of 2016.
- `startDay` ... an integer between `0` and `6` for the day at which the week starts `0`=Sunday, `1`=Monday, etc. _default is `0` ... Sunday_

```javascript
var weekz = require('weekz')
var weeks = weekz.byMonth(2015, 0)
/*
[ [ { start: 1, end: 3 },
    { start: 4, end: 10 },
    { start: 11, end: 17 },
    { start: 18, end: 24 },
    { start: 25, end: 31 } ],
  [ { start: 1, end: 7 },
    { start: 8, end: 14 },
    { start: 15, end: 21 },
    { start: 22, end: 28 } ],
  [ { start: 1, end: 7 },
  ....
    { start: 29, end: 30 } ],
  [ { start: 1, end: 5 },
    { start: 6, end: 12 },
    { start: 13, end: 19 },
    { start: 20, end: 26 },
    { start: 27, end: 31 } ]
]
*/
```

## License

ISC

## Contributions

Encouraged!





