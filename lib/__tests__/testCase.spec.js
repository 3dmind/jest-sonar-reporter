'use strict'

const xml = require('xml')
const testCase = require('../testCase')

describe('testCase', () => {
  test('<testCase name="" duration=""/>', () => {
    const mock = {
      duration: 5,
      fullName: 'lorem ipsum'
    }

    const actualReport = xml(testCase(mock))

    expect(actualReport).toMatchSnapshot()
  })

  test('failing test case', () => {
    const mock = {
      failureMessages: ['Lorem ipsum'],
      status: 'failed',
      title: 'lorem ipsum'
    }

    const actualReport = xml(testCase(mock), true)

    expect(actualReport).toMatchSnapshot()
  })
})
