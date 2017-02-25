'use strict'

const xml = require('xml')
const TestCase = require('../TestCase')

describe('TestCase', () => {
  test('<testCase name="" duration=""/>', () => {
    const mock = {
      duration: 5,
      fullName: 'lorem ipsum'
    }
    const testCase = new TestCase(mock)

    const actualReport = xml(testCase)

    expect(actualReport).toMatchSnapshot()
  })

  test('failing test case', () => {
    const mock = {
      failureMessages: ['Lorem ipsum'],
      status: 'failed',
      title: 'lorem ipsum'
    }
    const testCase = new TestCase(mock)

    const actualReport = xml(testCase, true)

    expect(actualReport).toMatchSnapshot()
  })
})
