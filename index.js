'use strict'

const fs = require('fs')
const path = require('path')
const xml = require('xml')
const TestExecutions = require('./lib/TestExecutions')

const XML_INDENT = '  '
const BASE = 'test-report.xml'
const out = process.env.TEST_REPORT_PATH || process.cwd();

module.exports = (results) => {
  const testExecutions = new TestExecutions(results)
  const report = xml(testExecutions, {declaration: true, indent: XML_INDENT})

  if (process.env.TEST_REPORT_PATH && !fs.existsSync(out)) {
    fs.mkdirSync(out)
  }

  const reportFile = path.join(out, BASE)
  fs.writeFileSync(reportFile, report)
}
