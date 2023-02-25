const types = ["chore", "docs", "feat", "fix", "style", "setting", "blog"];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", types],
  },
};
