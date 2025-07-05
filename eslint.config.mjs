import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next",
    "next/typescript"
  ),
  {
    rules: {
      // ✅ Downgrade from error → warning
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",

      // 🔧 (Optional) Soften common strict rules
      "react/display-name": "off",
      "react/prop-types": "off",
    },
  },
];
