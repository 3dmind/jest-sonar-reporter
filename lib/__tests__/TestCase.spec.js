'use strict'

const xml = require('xml')
const TestCase = require('../TestCase')

describe('TestCase', () => {
  test('<testCase name="" duration=""/>', () => {
    const mock = {
      title: 'lorem ipsum'
    }
    const testCase = new TestCase(mock)

    const actualReport = xml(testCase)

    expect(actualReport).toMatchSnapshot()
  })

  test('failing test case', () => {
    const mock = {
      title: 'lorem ipsum',
      status: 'failed',
      failureMessages: ['Lorem ipsum']
    }
    const testCase = new TestCase(mock)

    const actualReport = xml(testCase, true)

    expect(actualReport).toMatchSnapshot()
  })
})
