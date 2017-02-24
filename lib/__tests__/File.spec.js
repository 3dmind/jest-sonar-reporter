'use strict'

const xml = require('xml')
const File = require('../File')

describe('File', () => {
  test('<file path=""></file>', () => {
    const mock = {
      testFilePath: 'test/FooTest.js',
      testResults: []
    }
    const file = new File(mock)

    const actualReport = xml(file)

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
    const file = new File(mock)

    const actualReport = xml(file, true)

    expect(actualReport).toMatchSnapshot()
  })
})
