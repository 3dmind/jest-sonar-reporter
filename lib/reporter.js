'use strict'

const fs = require('fs')
const path = require('path')
const xml = require('xml')
const getPackageData = require('./utils/getPackageData')
const getConfig = require('./utils/getConfig')
const xmlIndent = require('./utils/xmlIndent')
const testExecutions = require('./xml/testExecutions')
const getDefaultConfig = require('./getDefaultConfig')
const jestValidate = require('jest-validate')

const root = process.cwd()
const packageData = getPackageData(root)

const processor = (results, reporterOptions = {}) => {
  const config = Object.assign({}, getDefaultConfig(root), getConfig(packageData, reporterOptions, process.env.NODE_ENV))
  const report = xml(testExecutions(results, config.sonar56x), { declaration: true, indent: xmlIndent(config.indent) })

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

// This is an old school "class" in order
// for the constructor to be invoked statically and via "new"
// so we can support both testResultsProcessor and reporters
// TODO: refactor to es6 class after testResultsProcessor support is removed
function JestSonar(globalConfig, options) {

  // See if constructor was invoked statically
  // which indicates jest-sonar-reporter was invoked as a testResultsProcessor
  // and show deprecation warning
  if (globalConfig.hasOwnProperty('testResults')) {
    const newConfig = JSON.stringify({
      reporters: ['jest-sonar-reporter']
    }, null, 2);

    jestValidate.logValidationWarning('testResultsProcessor support is deprecated. Please use jest reporter.', newConfig);
    return processor(globalConfig);
  }

  this._options = options;

  this.onRunComplete = (contexts, results) => {
    processor(results, this._options);
  };
}

module.exports = JestSonar
