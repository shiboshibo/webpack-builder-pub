module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint-config-airbnb'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
};
