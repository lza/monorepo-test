import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitIgnore = resolve(__dirname, '.gitignore');

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  includeIgnoreFile(gitIgnore),
  {
    ignores: [
      '**/coverage/',
      '**/public/',
      '**/dist',
      '**/pnpm-locl.yaml',
      '**/pnpm-workspace.yaml',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettierRecommended,
];
