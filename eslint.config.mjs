import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import preferArrow from "eslint-plugin-prefer-arrow";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    plugins: {
      "prefer-arrow": preferArrow,
      unicorn: unicorn,
      prettier: prettier,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Prefer arrow functions rules (auto-fixable)
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "func-style": ["error", "expression"],
      "prefer-arrow-callback": ["error", { allowNamedFunctions: false }],

      // Unicorn rules
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            e2e: true,
            utils: true, // Allow utils abbreviation
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],

      // Import sorting rules
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // React rules
      "react/no-unescaped-entities": "off",

      // Import rules
      "import/no-unresolved": "off",

      // TypeScript rules
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  // File-specific overrides
  {
    files: ["*.ts", "*.tsx", "*.d.ts", "*.js", "*.jsx"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
  // Test files overrides
  {
    files: ["**/*.test.*", "**/*.spec.*", "**/tests/**", "**/test-utils.*"],
    rules: {
      "import/export": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
];

export default eslintConfig;
