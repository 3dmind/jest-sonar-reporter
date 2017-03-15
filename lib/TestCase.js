'use strict'

const failure = require('./failure')

class TestCase {

  constructor(testResult) {
    let failures
    const testCase = {
      _attr: {
        name: testResult.fullName || testResult.title,
        duration: testResult.duration || 0
      }
    }

    if (testResult.status === 'failed') {
      failures = testResult.failureMessages.map(failureMessage => failure(failureMessage))
      this.testCase = [testCase].concat(failures)
    } else {
      this.testCase = testCase
    }
  }

}

module.exports = TestCase
