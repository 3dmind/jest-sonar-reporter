'use strict'

const xml = require('xml')
const Failure = require('../Failure')

describe('Failure', () => {
  test('<failure message=""></failure>', () => {
    const mock = 'Lorem ispum'
    const failure = new Failure(mock)

    const actualReport = xml(failure)

    expect(actualReport).toMatchSnapshot()
  })
})
