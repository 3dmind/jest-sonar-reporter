'use strict'

const testCase = require('./testCase')

class File {

  constructor(testResult) {
    const file = [{_attr: {path: testResult.testFilePath}}]
    const testCases = testResult.testResults.map(testCase)

    this.file = file.concat(testCases)
  }

}

module.exports = File
