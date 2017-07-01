'use strict'

const xmlIndent = require('../xmlIndent')

describe('xmlIndent', () => {
  test('should generate spaces', () => {
    const indent = xmlIndent(4)
    expect(indent).toMatchSnapshot()
  })
})
