// http://eslint.org/docs/user-guide/configuring

module.exports = {

  parser: 'babel-eslint',
  plugins : [
    'react'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      'jsx': true
    }
  },

  env: {
    browser: true,
    jest: true,
    es6: true,
    amd: true,
    node: true,
    mocha: true
  },

  globals: {
    "$": true
  },

  // extends: [
  //   'airbnb'
  // ],

  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // allow prefix underscore to indicate private memeber/function
    'no-underscore-dangle': 0,

    // allow both windows and linux type linebreaks
    'linebreak-style': 0,

    // allow loose prop type check
    'react/forbid-prop-types': 0,

    // allow dev module import in config files
    'import/no-extraneous-dependencies': 0,
    "comma-dangle": 1,
    "quotes": [ 1, "single" ],
    "no-undef": 1,
    "global-strict": 0,
    "no-extra-semi": 1,
    "no-console": 1,
    "no-unused-vars": 1,
    "no-trailing-spaces": [1, { "skipBlankLines": true }],
    "no-unreachable": 1,
    "no-alert": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1
  }
}
