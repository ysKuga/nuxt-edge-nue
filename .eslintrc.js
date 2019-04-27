module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  // plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier/issues/2280#issuecomment-311326803
        singleQuote: true,
        trailingComma: true,
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
  },
};
