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
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  // required to lint *.vue files
  // plugins: ["vue", "prettier"],
  // add your custom rules here
  rules: {
    // https://qiita.com/yoshinbo/items/3436face1a1b02f2542f
    // 上記の内容をコピー
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
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
        // trailingComma: 'es5',
      },
    ],
    'comma-dangle': ['error', 'only-multiline'],
  },
};
