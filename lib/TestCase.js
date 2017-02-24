'use strict'

class TestCase {

  constructor(testResult) {
    this.testCase = {
      _attr: {
        name: testResult.title,
        duration: 0
      }
    }
  }

}

module.exports = TestCase
