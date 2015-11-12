'use strict'

module.exports = function() {
  if (window.performance === undefined) {
    console.log('Unfortunately, your browser does not support the Navigation Timing API')
    return
  }

  const timing = performance.timing
  let api = Object.create(null)

  for (let k in timing) {
    if (k !== 'toJSON') {
      api[k] = timing[k]
    }
  }

  return api
}
