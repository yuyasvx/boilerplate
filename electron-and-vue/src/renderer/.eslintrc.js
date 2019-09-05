const baseConfig = require('../../eslintrc.common')

module.exports = {
  ...baseConfig,
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'standard',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    '@vue/typescript'
  ],
  rules: {
    ...baseConfig.rules,
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off'
  }
}
