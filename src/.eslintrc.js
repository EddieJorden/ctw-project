module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'react/jsx-filename-extension': [1, { allow: 'always' }],
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
  },
};
