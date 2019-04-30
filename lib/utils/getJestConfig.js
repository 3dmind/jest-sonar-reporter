'use strict';

const fs = require('fs');

module.exports = function () {

  let jestSonarConfig = {};
  const file = getJestFilePath();
  if(fs.existsSync(file)){
    const config = require(file);
    if(config.testEnvironmentOptions
        && config.testEnvironmentOptions.sonarReporter
        && typeof config.testEnvironmentOptions.sonarReporter === 'object'){
        jestSonarConfig = config.testEnvironmentOptions.sonarReporter;
    }
  }
  return jestSonarConfig;
};

function getJestFilePath(){
    const args = process.argv;
    for(let i = 0; i< args.length; ++i){
        const arg = args[i];
        if (arg === '--config' && args[i+1] !== undefined){
            return args[i+1];
        }
    }

    return '';
}
