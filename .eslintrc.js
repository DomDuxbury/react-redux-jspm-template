module.exports = {
  "rules": {
    "indent": [
      2,
      2,
      {SwitchCase: 1}
    ],
    "quotes": [
      2,
      "single",
    ],
    "linebreak-style": [
      2,
      "windows"
    ],
    "semi": [
      2,
      "always"
    ]
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": "eslint:recommended",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true,
      "modules": true
  },
  "plugins": [
    "react"
  ]
};