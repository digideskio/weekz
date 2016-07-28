'use strict'
module.exports = function fill (max, val) {
  val = String(val)
  while (val.length < max) {
    val = '0' + val
  }
  return val
}
