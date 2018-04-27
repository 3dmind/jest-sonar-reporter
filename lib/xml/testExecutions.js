'use strict'

const file = require('./file')

module.exports = function testExecutions(data, config) {
  const aTestExecution = [{_attr: {version: '1'}}]
  const testResults = data.testResults.map(function(testResult) {
    return file(testResult, config)
  })

  return config.sonar56x
    ? { unitTest: aTestExecution.concat(testResults) }
    : { testExecutions: aTestExecution.concat(testResults) };
};
