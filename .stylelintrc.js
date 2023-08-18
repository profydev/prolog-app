module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],

  rules: {
    // allow CamelCase for class names
    "selector-class-pattern":
      "^([a-z][a-zA-Z]*)(-[a-z][a-zA-Z]*)*$|^([a-z][a-zA-Z]*)+$",
    // allow CSS modules "composes" proptery
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          // CSS Modules composition
          // https://github.com/css-modules/css-modules#composition
          "composes",
        ],
      },
    ],
  },
};
