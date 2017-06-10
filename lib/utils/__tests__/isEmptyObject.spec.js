'use strict'

const isEmptyObject = require('../isEmptyObject')

describe('isEmptyObject', () => {
  test('empty object', () => {
    expect.assertions(1)

    const obj = {}

    expect(isEmptyObject(obj)).toBe(true)
  })

  test('non empty object', () => {
    expect.assertions(1)

    const obj = {foo: 'FOO'}

    expect(isEmptyObject(obj)).toBe(false)
  })
})
