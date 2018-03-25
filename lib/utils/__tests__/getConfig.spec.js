'use strict'

const getConfig = require('../getConfig')

describe('getConfig', () => {
  test('should retrieve config from JSON object', () => {
    expect.assertions(1)

    const json = {
      'jestSonar': {
        'reportPath': 'reports',
        'reportFile': 'test-report.xml',
        'indent': 4
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

  test('should include config for "env"', () => {
    expect.assertions(1)

    const json = {
      'jestSonar': {
        'reportPath': 'reports',
        'reportFile': 'test-report.xml',
        'indent': 4,
        'env': {
          'test': {
            'reportPath': 'reports-test'
          }
        }
      }
    }

    const config = getConfig(json, 'test')

    expect(config).toEqual({
      'reportPath': 'reports-test',
      'reportFile': 'test-report.xml',
      'indent': 4,
    })
  })
})
