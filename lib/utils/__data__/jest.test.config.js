module.exports = {
    testEnvironmentOptions: {
        sonarReporter: {
            "reportFile": "acceptance.xml",
            "reportPath": "test-reports",
        }},
    testRegex: '.*\\.test\\.ts$'
};
