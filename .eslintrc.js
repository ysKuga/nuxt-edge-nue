module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'es6': true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 2018,
  },
  extends: [
    'vue',
    'plugin:vue/recommended',
    // semi colon のため vue 関連の後に
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', {
      // https://github.com/prettier/prettier/issues/2280#issuecomment-311326803
      'singleQuote': true
    }],
    'comma-dangle': [2, 'always-multiline'],
  }
};
