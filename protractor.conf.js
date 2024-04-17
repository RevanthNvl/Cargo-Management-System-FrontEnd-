const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  specs: ['./src/**/*.selTest-spec.ts'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  }
};
