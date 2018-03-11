'use strict'

const getDefaultConfig = require('../getDefaultConfig')

describe('getDefaultConfig', () => {
  test('should retrieve default configuration', () => {
    expect.assertions(1)

    const root = '/'

    const defaultConfig = getDefaultConfig(root)

    expect(defaultConfig).toMatchSnapshot()
  })
})
