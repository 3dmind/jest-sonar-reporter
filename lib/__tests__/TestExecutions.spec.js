'use strict'

const xml = require('xml')
const TestExecutions = require('../TestExecutions')

describe('TestExecutions', () => {
  test('root: <testExecutions version="1">', () => {
    const testExecutions = new TestExecutions([])

    const actualReport = xml(testExecutions)

    expect(actualReport).toMatchSnapshot()
  })

  test('file tag', () => {
    const mock = [
      {
        testFilePath: 'test/FooTest.js',
        testResults: []
      },
      {
        testFilePath: 'test/BarTest.js',
        testResults: []
      }
    ]
    const testExecutions = new TestExecutions(mock)

    const actualReport = xml(testExecutions, true)

    expect(actualReport).toMatchSnapshot()
  })
})
