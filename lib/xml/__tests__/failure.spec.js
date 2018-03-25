'use strict'

const xml = require('xml')
const failure = require('../failure')

describe('failure', () => {
  test('<failure message=""></failure>', () => {
    const mock = 'Lorem ispum'

    const actualReport = xml(failure(mock))

    expect(actualReport).toMatchSnapshot()
  })
})
