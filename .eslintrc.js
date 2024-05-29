module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    eqeqeq: 'error',
    'no-unused-vars': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'jsx-a11y/anchor-has-content': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
  },
};
