/**
 * Timing.js 1.0.4
 * Copyright 2015 Addy Osmani
 */

/**
 * Navigation Timing API helpers
 * timing.getTimes()
 **/

module.exports = function() {
  'use strict'
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
