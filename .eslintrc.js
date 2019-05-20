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
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'eslint:recommended',
  ],
  // required to lint *.vue files
  // plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    // https://github.com/prettier/eslint-plugin-prettier/issues/94#issuecomment-438781791
    // - 上記により HTML タグが 1 行あたり 80 文字を超過した場合に属性が 1 つ 1 行となる・・・
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier/issues/2280#issuecomment-311326803
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
  },
};
