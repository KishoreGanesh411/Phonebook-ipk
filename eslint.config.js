module.exports = {
  root: true,
  extends: ["expo", "eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};