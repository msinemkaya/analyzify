module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [ 'dist', '.eslintrc.cjs' ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [ 'react-refresh' ],
  rules: {
    'no-console': 1,
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'function' },
      { 'blankLine': 'always', 'prev': 'function', 'next': '*' },
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
