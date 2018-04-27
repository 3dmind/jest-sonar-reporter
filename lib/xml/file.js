'use strict'

const testCase = require('./testCase')
const path = require('path')

module.exports = function file(testResult, config) {
  const testFilePath = config.useRelativePath ? path.relative(process.cwd(), testResult.testFilePath) : testResult.testFilePath
  const aFile = [{_attr: {path: testFilePath}}]
  const testCases = testResult.testResults.map(testCase)

  return {file: aFile.concat(testCases)}
}
