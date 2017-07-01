'use strict'

const JEST_SONAR_KEY = 'jestSonar'

module.exports = json => {
  if (JEST_SONAR_KEY in json) {
    return json[JEST_SONAR_KEY]
  } else {
    return {}
  }
}
