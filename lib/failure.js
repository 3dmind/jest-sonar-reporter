'use strict'

module.exports = function failure(message) {
  return {
    failure: {
      _attr: {
        message
      }
    }
  }
}
