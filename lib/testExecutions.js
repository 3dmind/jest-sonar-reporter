'use strict'

const file = require('./file')

module.exports = function testExecutions(data) {
  const aTestExecution = [{_attr: {version: '1'}}]
  const testResults = data.testResults.map(file)

  return {testExecutions: aTestExecution.concat(testResults)}
}
