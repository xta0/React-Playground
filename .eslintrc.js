module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "no-console": 0,
    "class-methods-use-this": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": 0,
    "object-curly-newline": 0,
    "react/destructuring-assignment": 0
  }
};
