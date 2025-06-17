import { defineConfig } from 'eslint/config';
import eslintPluginJs from '@eslint/js';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',             // Same as ecmaVersion: "latest"
      sourceType: 'module',              // Equivalent to sourceType: "module"
      globals: {
        ...globals.browser,              // Allow browser globals like `window`
        ...globals.node,                 // Allow Node.js globals like `require`
      },
    },
    plugins: {
      js: eslintPluginJs,
    },
    rules: {
      ...eslintPluginJs.configs.recommended.rules, // Equivalent to "eslint:recommended"
      semi: ['error', 'always'],                  // Custom rule: require semicolons
      quotes: ['error', 'single'],                // Custom rule: require single quotes
    },
  },
  {
    // This block is for Jest test files
    files: ['**/__tests__/**/*.js', '**/*.test.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
]);
