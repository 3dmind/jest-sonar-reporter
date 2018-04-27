'use strict'

const xml = require('xml')
const file = require('../file')
const path = require('path')

describe('file', () => {
  test('<file path=""></file>', () => {
    const mock = {
      testFilePath: 'test/FooTest.js',
      testResults: []
    }

    const actualReport = xml(file(mock, {useRelativePath: false}))

    expect(actualReport).toMatchSnapshot()
  })

  test('path value is relative', () => {
    const mock = {
      testFilePath: path.join(process.cwd(), 'test', 'RelativePathTest.js'),
      testResults: []
    }

    const actualReport = xml(file(mock, {useRelativePath: true}))

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

    const actualReport = xml(file(mock, {useRelativePath: false}), true)

    expect(actualReport).toMatchSnapshot()
  })
})
