import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { includeIgnoreFile } from '@eslint/compat';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitIgnorePath = resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitIgnorePath),
  {
    ignores: [
      '**/coverage/',
      '**/public/',
      '**/dist/',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
];
