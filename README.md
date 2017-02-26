# jest-sonar-reporter

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

The custom reporter generates the `test-report.xml` file.
To specify a different location set the `TEST_REPORT_PATH` environment variable.

Use `cross-env` to specify the report path in your `package.json`.

```json
{
  "scripts": {
    "test": "cross-env TEST_REPORT_PATH=reports jest"
  }
}
```

Or use `env-cmd` to specify a test environment configuration.

1. Add the environment variable to your `.env-cmdrc` file.
```json
{
  "test": {
    "TEST_REPORT_PATH": "reports"
  }
}
```
2. Configure a test script in your `package.json` 

```json
{
  "scripts": {
    "test": "env-cmd test jest"
  }
}
```

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
