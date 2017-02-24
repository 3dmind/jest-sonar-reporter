'use strict'

class Failure {
  constructor(failureMessage) {
    this.failure = {_attr: {message: failureMessage}}
  }
}

module.exports = Failure
