'use strict'

const TestCase = require('./TestCase')

class File {

  constructor(testResult) {
    const file = [{_attr: {path: testResult.testFilePath}}]
    const testCases = testResult.testResults.map(aTestResult => new TestCase(aTestResult))

    this.file = file.concat(testCases)
  }

}

module.exports = File
