module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'semi': ['error', 'always'],
    'space-before-function-paren': ["error", "never"]
  }
}
