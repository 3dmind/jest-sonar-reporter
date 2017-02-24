'use strict'

const File = require('./File')

class TestExecutions {

  constructor(results) {
    this.testExecutions = [{_attr: {version: '1'}}].concat(results.map(result => new File(result)))
  }

}

module.exports = TestExecutions
