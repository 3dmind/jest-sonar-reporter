'use strict'

const getConfig = require('../getConfig')

describe('getConfig', () => {
  test('should retrieve config from JSON object', () => {
    expect.assertions(1)

    const json = {
      'jestSonar': {
        'reportPath': 'reports'
      }
    }

    const config = getConfig(json)

    expect(config).toMatchSnapshot()
  })

  test('should default to empty config', () => {
    expect.assertions(1)

    const json = {}

    const config = getConfig(json)

    expect(config).toMatchSnapshot()
  })
})
