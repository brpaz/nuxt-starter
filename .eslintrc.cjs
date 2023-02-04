/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser' },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};

module.exports = config;
