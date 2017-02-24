'use strict'

const xml = require('xml')
const File = require('../File')

describe('File', () => {
  test('<file path=""></file>', () => {
    const mock = {
      testFilePath: 'test/FooTest.js'
    }
    const file = new File(mock)

    const actualReport = xml(file)

    expect(actualReport).toMatchSnapshot()
  })
})
