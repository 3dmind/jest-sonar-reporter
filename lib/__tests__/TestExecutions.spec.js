'use strict'

const xml = require('xml')
const TestExecutions = require('../TestExecutions')

describe('TestExecutions', () => {
  test('root: <testExecutions version="1">', () => {
    const mock = {testResults: []}
    const testExecutions = new TestExecutions(mock)

    const actualReport = xml(testExecutions)

    expect(actualReport).toMatchSnapshot()
  })

  test('file tag', () => {
    const mock = {
      testResults: [
        {
          testFilePath: 'test/FooTest.js',
          testResults: []
        },
        {
          testFilePath: 'test/BarTest.js',
          testResults: []
        }
      ]
    }
    const testExecutions = new TestExecutions(mock)

    const actualReport = xml(testExecutions, true)

    expect(actualReport).toMatchSnapshot()
  })

  test('full report', () => {
    const mock = {
      testResults: [
        {
          testFilePath: 'test/FooTest.js',
          testResults: [
            {
              title: 'lorem ipsum'
            }
          ]
        },
        {
          testFilePath: 'test/BarTest.js',
          testResults: [
            {
              title: 'lorem ipsum',
              status: 'failed',
              failureMessages: ['Lorem ipsum']
            }
          ]
        }
      ]
    }
    const testExecutions = new TestExecutions(mock)

    const actualReport = xml(testExecutions, true)

    expect(actualReport).toMatchSnapshot()
  })
})
