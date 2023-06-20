/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:vitest-globals/recommended",
  ],
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    "vitest-global": true
  }
};
