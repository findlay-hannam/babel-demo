const presets = ["@babel/preset-env", "@babel/preset-react"];
const plugins = [
  [
    "groundskeeper-willie",
  ],
  [
    "feature-flags", {
      "import": {
        "module": "my-features"
      },
      "features": {
        "new-feature": "disabled",
      },
    },
  ],
  '@babel/plugin-proposal-optional-chaining',
  'react-require',
  'module:faster.js',
  'implicit-function',
  'function-composition',
  'console-source',
];

module.exports = { presets, plugins };
