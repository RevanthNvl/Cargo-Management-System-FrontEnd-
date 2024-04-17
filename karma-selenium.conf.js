const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      // Include all component test files
      
      'SEproj/src/app/agent/agent.component.spec.ts',
      'SEproj/src/app/cart/cart.component.spec.ts',
      'SEproj/src/app/customer/customer.component.spec.ts',
      'SEproj/src/app/home/home.component.spec.ts',
      'SEproj/src/app/manager/manager.component.spec.ts',
      'SEproj/src/app/model/model.component.spec.ts'
    ],
    preprocessors: {
      // Preprocess component test files
      'src/app/**/*.spec.js': ['@angular/cli']
    },
    // You can add more preprocessors if needed

    // Optional: Add code coverage configuration if desired
    coverageIstanbulReporter: {
      dir: path.join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },

    reporters: ['progress', 'coverage-istanbul'],
    // Add more reporters if needed

    // Optional: Add other configuration options as needed
  });
};
