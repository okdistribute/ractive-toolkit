var Ractive = require('ractive')
var prettyBytes = require('pretty-bytes')
var relativeDate = require('relative-date')

Ractive.events.contextmenu = function (node, fire) {
  // intercept contextmenu events and suppress them
  var contextmenuHandler = function (event) {
    event.preventDefault()

    // we'll pass along some coordinates. This will make more sense below
    fire({
      node: node,
      original: event,
      x: event.clientX,
      y: event.clientY
    })
  }

  node.addEventListener('contextmenu', contextmenuHandler)
}

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
