'use strict';

const fs = require('fs');
const path = require('path');


module.exports = function () {

  let jestSonarConfig = {};
  const file = getJestFilePath();
  const resolvedPath = path.resolve(file);
  if(fs.existsSync(path.resolve(resolvedPath))){
    const config = require(resolvedPath);
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
        if (arg.includes('--config=')){
            const file = arg.split('=')[1];
            return file;
        }

    }

    return '';
}
