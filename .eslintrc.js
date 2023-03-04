module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  rules: {
    'new-cap': ['error', { capIsNew: false }],
    'require-jsdoc': ['off'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    '@next/next/no-img-element': ['off'],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
}
