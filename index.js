var Ractive = require('ractive')
var prettyBytes = require('pretty-bytes')
var relativeDate = require('relative-date')

var templateHelpers = Ractive.defaults.data

templateHelpers.prettyBytes = function (bytes) {
  return prettyBytes(bytes)
}

templateHelpers.relativeDate = function (iso) {
  return relativeDate(new Date(iso))
}

module.exports = Ractive
