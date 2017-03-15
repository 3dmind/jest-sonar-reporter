'use strict'

const xml = require('xml')
const testExecutions = require('../testExecutions')

describe('testExecutions', () => {
  test('root: <testExecutions version="1">', () => {
    const mock = {testResults: []}

    const actualReport = xml(testExecutions(mock))

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

    const actualReport = xml(testExecutions(mock), true)

    expect(actualReport).toMatchSnapshot()
  })

  test('full report', () => {
    const mock = {
      testResults: [
        {
          testFilePath: 'test/FooTest.js',
          testResults: [
            {
              duration: 5,
              fullName: 'lorem ipsum'
            }
          ]
        },
        {
          testFilePath: 'test/BarTest.js',
          testResults: [
            {
              duration: 5,
              failureMessages: ['Lorem ipsum'],
              fullName: 'lorem ipsum',
              status: 'failed',
            }
          ]
        }
      ]
    }

    const actualReport = xml(testExecutions(mock), true)

    expect(actualReport).toMatchSnapshot()
  })
})
