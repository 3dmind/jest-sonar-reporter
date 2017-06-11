# jest-sonar-reporter

[![Build Status](https://travis-ci.org/3dmind/jest-sonar-reporter.svg?branch=master)](https://travis-ci.org/3dmind/jest-sonar-reporter)
[![Quality Gate](https://sonarqube.com/api/badges/gate?key=jest-sonar-reporter)](https://sonarqube.com/dashboard/index/jest-sonar-reporter)

jest-sonar-reporter is a custom results processor for Jest.
The processor converts Jest's output into Sonar's
[generic test data](https://docs.sonarqube.org/display/SONAR/Generic+Test+Data) format.

This project is inspired by Michael Allen's [jest-junit-reporter](https://github.com/michaelleeallen/jest-junit-reporter)
project.

## Installation

Using npm:

```bash
$ npm i -D jest-sonar-reporter
```

Using yarn:

```bash
$ yarn add -D jest-sonar-reporter
```

## Configuration

Configure Jest in your `package.json` to use `jest-sonar-reporter` as a custom results processor.

```json
{
  "jest": {
    "testResultsProcessor": "jest-sonar-reporter"
  }
}
```

Configure Sonar to import the test results. Add the `sonar.testExecutionReportPaths` property to your
`sonar-project.properties` file. 

```properites
sonar.testExecutionReportPaths=test-report.xml
```

## Customization

To customize the reporter you can use `package.json` to store the configuration.
Create a `jestSonar` entry like this:

```json
{
  "jestSonar": {}
}
```

You can customize the following options:
- `reportPath` This will specify the path to put the report in.
- `reportFile` This will specify the file name of the report.
- `indent` This will specify the indentation to format the report.

```json
{
  "jestSonar": {
    "reportPath": "reports",
    "reportFile": "test-reporter.xml",
    "indent": 4
  }
}
```

> Important: Don't forget to update `sonar.testExecutionReportPaths` when you use a custom path and file name.

## Usage

1. Run Jest to execute your tests.

Using npm:

```bash
$ npm run test
```

Using yarn:

```bash
$ yarn run test
```

2. Run sonar-scanner to import the test results.

```bash
$ sonar-scanner
```

## Licence

This project uses the [MIT](LICENSE) licence.
