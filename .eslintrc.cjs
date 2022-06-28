module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always', { ignorePackages: true }],
  },
};
