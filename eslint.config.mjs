import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Load Next.js config and override to use warnings
const nextRules = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

const relaxedRules = {
  rules: {
    // Example: common strict rules set to warning
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react/jsx-key": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "@next/next/no-img-element": "warn",
    "@next/next/no-page-custom-font": "warn",
    "@next/next/no-html-link-for-pages": "warn",

    // You can add more rule overrides here...
  },
};

export default [
  ...nextRules,
  relaxedRules,
];
