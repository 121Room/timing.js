'use strict'

module.exports = function() {
  if (window.performance === undefined) {
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
