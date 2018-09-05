module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0
    // "react/destructuring-assignment": [<enabled>, 'always']
  }
};
