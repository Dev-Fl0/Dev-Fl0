/* eslint-env node */
module.exports = {
  ignorePatterns: ['postcss.config.js'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended', // must be the last one
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'off',
    'linebreak-style': 0,
    'no-restricted-imports': 0,
  },
  settings: {
    react: {
      version: 'detect', // Pour détecter automatiquement la version de React
    },
  },
};
