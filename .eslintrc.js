module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:tailwindcss/recommended'],
  rules: {
    'linebreak-style': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
