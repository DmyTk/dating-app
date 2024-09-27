module.exports = {
  extends: ["expo", "prettier", "plugin:@tanstack/query/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "@tanstack/query/exhaustive-deps": "error",
  },
};
