// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import sonarjs from 'eslint-plugin-sonarjs';

export default tseslint.config(
  { ignores: ['dist', 'packages-reports'] },
  // Base config for TypeScript + React
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'writable', // React 17+ or 19 JSX transform
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      sonarjs,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // Base configs
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...prettier.rules,

      // React Refresh for Vite HMR
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // JSX a11y accessibility checks
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',

      // Import sorting
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off',

      // sonarjs rules
      'sonarjs/cognitive-complexity': ['warn', 15],
    },
  },
  // Enforce exports-only in index.ts
  {
    files: ['**/index.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'Program > :not(ExportNamedDeclaration):not(ExportAllDeclaration):not(ExportDefaultDeclaration)',
          message: 'Only export statements are allowed in index.ts files.',
        },
      ],
    },
  },
  // Enforce PascalCase filenames for TSX (React component) files
  {
    files: ['**/*.tsx'],
    plugins: { unicorn },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
  // Disable PascalCase rule for specific TSX files
  {
    files: ['src/main.tsx'],
    plugins: { unicorn },
    rules: {
      'unicorn/filename-case': 'off',
    },
  },
  // Enforce camelCase filenames for other TS files (non-TSX)
  {
    files: ['**/*.ts'],
    plugins: { unicorn },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'camelCase',
          ignore: ['\\.d\\.ts$'], // skip type declarations
        },
      ],
    },
  },
  {
    files: ['**/*.tsx'],
    plugins: { unicorn },
    rules: {
      'react/prop-types': 'off',
    },
  },
  storybook.configs['flat/recommended'],
);
