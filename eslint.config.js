import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

const commonConfig = {
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: 'module',
    parser: tseslintParser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
};

const commonRules = {
  // Prettier
  'prettier/prettier': ['error'],

  // TypeScript
  '@typescript-eslint/no-explicit-any': 'error',
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-non-null-assertion': 'error',

  // React
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],

  // React Hooks
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',

  // Imports
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'never',
      alphabetize: { order: 'asc' }
    }
  ],

  // General
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'max-len': ['error', { code: 100, ignoreStrings: true, ignoreComments: true }],
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
};

export default [
  {
    ...commonConfig,
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
    plugins: {
      '@typescript-eslint': tseslint,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'import': importPlugin,
      'prettier': prettierPlugin
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: { alwaysTryTypes: true }
      }
    },
    rules: {
      ...commonRules,
      ...prettierConfig.rules
    },
  },
  {
    ...commonConfig,
    files: ['*.config.{js,ts}', 'jest.setup.js', 'tests/**/*.{ts,js}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-extraneous-dependencies': 'off'
    }
  },
];
