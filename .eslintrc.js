module.exports = {
  env: { browser: true, es2021: true, node: true, 'vue/setup-compiler-macros': true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    uni: 'readonly',
    requirePlugin: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue', 'prettier'],
  ignorePatterns: ['dist/', 'node_modules/', 'src/wxcomponents/**/*'],
  rules: {
    semi: ['warn', 'always'],
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
    'no-unused-vars': 1,
    'no-constant-condition': 1,
    'no-undef': 0,
    'vue/require-default-prop': 0,
  },
};
