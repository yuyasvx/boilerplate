const commonConfig = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testURL: 'http://localhost/'
}

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/main/**/*.ts',
    '<rootDir>/src/common/**/*.ts',
    '<rootDir>/src/renderer*/*.ts',
    '<rootDir>/src/renderer/**/*.vue'
  ],
  projects: [
    {
      ...commonConfig,
      // runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/tests/unit/main/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)']
    },
    {
      ...commonConfig,
      // runner: '@jest-runner/electron',
      // testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['<rootDir>/tests/unit/renderer/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)']
    }
  ],
  globals: {
    'vue-jest': {
      env: {
        test: {
          plugins: ['transform-es2015-modules-commonjs', 'dynamic-import-node']
        }
      }
    }
  }
}
