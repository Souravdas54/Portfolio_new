import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier", // Add Prettier at the end to override conflicting rules.
  ),
  {
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      import: eslintPluginImport,
    },
    rules: {
     
      // React-specific rules
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React import
      "react/jsx-uses-react": "off", // Not needed for Next.js 15+
      "react/jsx-uses-vars": "warn", // Warn if JSX variables are unused

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error", // Enforces hook usage rules
      "react-hooks/exhaustive-deps": "warn", // Warns on missing dependencies in hooks

      // TypeScript-specific rules
      "@typescript-eslint/no-unused-vars": "warn", // Helps avoid unused variables
      "@typescript-eslint/no-explicit-any": "warn", // Encourages better typing

      // Import Plugin Rules (Added)
      "import/no-unresolved": "error", // Ensures imported modules are correctly resolved
      "import/order": [
        "warn",
        {
          // Organizes imports alphabetically
          alphabetize: { order: "asc" },
        },
      ],

      // Prettier Integration (Disables conflicting ESLint rules)
      "prettier/prettier": "warn",

       // ✅ Custom Formatting Rules
       "semi": ["error", "never"], // No semicolons
       "quotes": ["error", "single"], // Use single quotes
       "indent": ["error", 2], // 2-space indentation
       "comma-dangle": ["error", "never"], // No trailing commas
       "space-before-function-paren": ["error", "always"], // Space before function parentheses
       "no-multiple-empty-lines": ["error", { "max": 1 }], // Limit empty lines
       "object-curly-spacing": ["error", "always"] // Space inside curly braces
    },
  },
];

export default eslintConfig;
