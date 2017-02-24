'use strict'

const File = require('./File')

class TestExecutions {

  constructor(data) {
    const testExecutions = [{_attr: {version: '1'}}]
    const testResults = data.testResults.map(result => new File(result))
    this.testExecutions = testExecutions.concat(testResults)
  }

}

module.exports = TestExecutions
