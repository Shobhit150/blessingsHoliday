import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const nextRules = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default [
  ...nextRules,
  {
    rules: {
      // ✅ Downgrade from error → warning
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
