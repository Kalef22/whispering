// eslint.config.js
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  // ...tu config base

  {
    files: ["**/*.test.js", "**/*.spec.js", "tests/**/*.js"],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/valid-expect": "error",
    },
  },
];