'use strict'

module.exports = (wallaby) => {
  return {
    debug: true,
    files: [
      '!lib/**/__tests__/*.js',
      'package.json',
      'lib/**/__tests__/**/*.snap',
      'lib/**/*.js',
    ],
    tests: [
      'lib/**/__tests__/*.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    setup: function (wallaby) {
      wallaby.testFramework.configure(require('./package.json').jest)
    }
  }
}
