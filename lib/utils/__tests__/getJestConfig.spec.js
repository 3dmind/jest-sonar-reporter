'use strict';

const initialArgv = [...process.argv];
const getJestConfig = require('../getJestConfig');

describe('getJestConfig', () => {


  beforeEach(() => {
    process.argv = [...initialArgv];
  });

  test('should get empty config if no config param is passed', () => {
    const config = getJestConfig();
    expect(config).toEqual({});
  });

  test('should get config if config file parameter is passed as two args', () => {
    process.argv.push('--config');
    process.argv.push('./lib/utils/__data__/jest.test.config.js');

    const config = getJestConfig();

    expect(config).toEqual({
      'reportPath': 'test-reports',
      'reportFile': 'acceptance.xml',
    });
  });

  test('should get config if config file parameter is passed as one arg', () => {
    process.argv.push('--config=./lib/utils/__data__/jest.test.config.js');
    const config = getJestConfig();

    expect(config).toEqual({
      'reportPath': 'test-reports',
      'reportFile': 'acceptance.xml',
    });
  });

});
