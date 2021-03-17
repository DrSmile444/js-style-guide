module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-html',
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
  },
};
