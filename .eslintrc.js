module.exports = {
  extends: [
    // https://eslint.org/docs/rules/
    "eslint:recommended",
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
    "plugin:@typescript-eslint/recommended",
    // https://prettier.io/docs/en/eslint.html
    "plugin:prettier/recommended",

    // https://github.com/benmosher/eslint-plugin-import
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {},
  rules: {
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-useless-escape": "warn",
    "no-console": "warn",
    "no-var": "warn",
    "no-return-await": "warn",
    "prefer-const": "warn",
    "guard-for-in": "warn",
    "curly": "warn",
    "no-param-reassign": "warn",
    "prefer-spread": "warn",

    "import/no-unresolved": "off", // cannot handle `paths` in tsconfig
    "import/no-cycle": "error",
    "import/no-default-export": "warn",

    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/array-type": ["warn", { default: "generic" }],
    "@typescript-eslint/naming-convention": [
      "warn",
      { "selector": "default", "format": ["camelCase", "UPPER_CASE", "PascalCase"], "leadingUnderscore": "allow" },
      { "selector": "typeLike", "format": ["PascalCase"], "leadingUnderscore": "allow" },
    ],
    "@typescript-eslint/restrict-plus-operands": ["warn", { "checkCompoundAssignments": true }],
    "@typescript-eslint/no-non-null-assertion": "warn", // NOTE: pay attention to it because it may cause unexpected behavior
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-extra-semi": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-for-in-array": "warn",
    "@typescript-eslint/no-unnecessary-condition": ["warn", { "allowConstantLoopConditions": true }],
    "@typescript-eslint/no-implied-eval": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",

    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    "prettier/prettier": "warn",
  },
};
