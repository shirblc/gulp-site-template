// Karma configuration file
module.exports = function (karma) {
  karma.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        { pattern: "./tests/specs.js" },
        { pattern: "./dist/js/all.js" }
    ],
    preprocessors: {
        './tests/specs.js': ['sourcemap'],
        './dist/js/all.js': ['sourcemap', 'coverage']
    },
    coverageIstanbulReporter: {
      dir: path.resolve(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary']
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'coverage-istanbul'],
    port: 9876,
    logLevel: 'DEBUG',
    autoWatch: false,
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-extensions',
            '--disable-dev-shm-usage'
        ]
      }
    },
    singleRun: true,
	  browserDisconnectTimeout: 10000,
	  browserNoActivityTimeout: 100000
  });
};
