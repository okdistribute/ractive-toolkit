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

templateHelpers.filter = function (item, searchTerm, properties) {
  if (properties) {
    for (var i in properties) {
      var key = properties[i]
      if (contains(item[key], searchTerm)) return true
    }
    return false
  }
  return contains(item, searchTerm)
}

function contains (text, searchTerm) {
  return text.toLowerCase().indexOf(searchTerm) > -1
}

module.exports = Ractive
