'use strict'

const fs = require('fs')
const path = require('path')
const xml = require('xml')
const getPackageData = require('./utils/getPackageData')
const getConfig = require('./utils/getConfig')
const xmlIndent = require('./utils/xmlIndent')
const testExecutions = require('./testExecutions')

const root = process.cwd()
const defaultConfig = {
  indent: 2,
  reportPath: root,
  reportFile: 'test-report.xml',
  sonar56x : false
}
const packageData = getPackageData(root)
const config = Object.assign({}, defaultConfig, getConfig(packageData))

module.exports = (results) => {
  const report = xml(testExecutions(results, config.sonar56x), {declaration: true, indent: xmlIndent(config.indent)})

  if (!fs.existsSync(config.reportPath)) {
    fs.mkdirSync(config.reportPath)
  }

  const reportFile = path.join(config.reportPath, config.reportFile)
  fs.writeFileSync(reportFile, report)

  if (process.env.DEBUG) {
    fs.writeFileSync('debug.json', JSON.stringify(results, null, 2))
  }

  return results
}
