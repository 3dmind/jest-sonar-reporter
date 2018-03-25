'use strict'

const xml = require('xml')
const file = require('../file')

describe('file', () => {
  test('<file path=""></file>', () => {
    const mock = {
      testFilePath: 'test/FooTest.js',
      testResults: []
    }

    const actualReport = xml(file(mock))

    expect(actualReport).toMatchSnapshot()
  })

  test('testCase tag', () => {
    const mock = {
      testFilePath: 'test/FooTest.js',
      testResults: [
        {title: 'lorem ipsum'},
        {title: 'lorem ipsum'}
      ]
    }

    const actualReport = xml(file(mock), true)

    expect(actualReport).toMatchSnapshot()
  })
})
