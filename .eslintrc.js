module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    "es6": true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 2018,
  },
  extends: [
    'vue',
    'plugin:vue/recommended',
    // semi colon のため vue 関連の後に
    'eslint:recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "comma-dangle": [2, "always-multiline"],
  }
};
