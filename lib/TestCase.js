'use strict'

const Failure = require('./Failure')

class TestCase {

  constructor(testResult) {
    let failures
    const testCase = {
      _attr: {
        name: testResult.title,
        duration: 0
      }
    }

    if (testResult.status === 'failed') {
      failures = testResult.failureMessages.map(failureMessage => new Failure(failureMessage))
      this.testCase = [testCase].concat(failures)
    } else {
      this.testCase = testCase
    }
  }

}

module.exports = TestCase
