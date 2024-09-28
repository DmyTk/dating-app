module.exports = {
  extends: ["expo", "prettier", "plugin:@tanstack/query/recommended"],
  plugins: ["simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@tanstack/query/exhaustive-deps": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
