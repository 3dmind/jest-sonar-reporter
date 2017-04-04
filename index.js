'use strict'

const fs = require('fs')
const path = require('path')
const xml = require('xml')
const testExecutions = require('./lib/testExecutions')

const XML_INDENT = '  '
const BASE = 'test-report.xml'
const out = process.env.TEST_REPORT_PATH || process.cwd();

module.exports = (results) => {
  const report = xml(testExecutions(results), {declaration: true, indent: XML_INDENT})

  if (process.env.TEST_REPORT_PATH && !fs.existsSync(out)) {
    fs.mkdirSync(out)
  }

  const reportFile = path.join(out, BASE)
  fs.writeFileSync(reportFile, report)

  if (process.env.DEBUG) {
    fs.writeFileSync('debug.json', JSON.stringify(results.testResults, null, 2))
  }

  return results
}
