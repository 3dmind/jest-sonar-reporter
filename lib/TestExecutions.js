'use strict'

const file = require('./file')

class TestExecutions {

  constructor(data) {
    const testExecutions = [{_attr: {version: '1'}}]
    const testResults = data.testResults.map(file)
    this.testExecutions = testExecutions.concat(testResults)
  }

}

module.exports = TestExecutions
