'use strict'

const xml = require('xml')
const TestExecutions = require('../TestExecutions')

describe('TestExecutions', () => {
  test('root: <testExecutions version="1">', () => {
    const testExecutions = new TestExecutions()

    const actualReport = xml(testExecutions)

    expect(actualReport).toMatchSnapshot()
  })
})
