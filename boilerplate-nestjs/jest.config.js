module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.(spec|test).(js|ts)|**/__tests__/*.(js|ts)']
}
