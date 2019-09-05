const baseConfig = require('../../eslintrc.common')

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'standard',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    ...baseConfig.rules,
    'node/no-unsupported-features/es-syntax': 'off'
  }
}
