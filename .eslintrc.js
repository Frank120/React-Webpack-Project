// http://eslint.org/docs/user-guide/configuring

module.exports = {

  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
  },

  globals: {
    "$": true
  },

  extends: [
    'airbnb'
  ],

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
    'import/no-extraneous-dependencies': 0
  }
}
