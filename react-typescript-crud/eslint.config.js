import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import tsLintPlugin from '@typescript-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser', // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json' // Ensure ESLint uses the TypeScript project config
      }
    }
  },
  {
    plugins: {
      '@typescript-eslint': tsLintPlugin
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Warn if functions don't have explicit return types
      '@typescript-eslint/no-explicit-any': 'error', // Disallow `any` type
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // Enforce consistent type definitions (e.g., always use `interface`)
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ], // Prevent unused variables
      'react/react-in-jsx-scope': 'off',
      // Other common ESLint rules
      'no-console': 'warn' // Warn for console statements
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended
];
