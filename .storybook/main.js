const path = require("path");

module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve.alias["next/router"] = require.resolve(
      "../__mocks__/next/router.tsx"
    );
    config.resolve.alias["@components"] = path.resolve("./components");
    config.resolve.alias["@contexts"] = path.resolve("./contexts");
    config.resolve.alias["@styles"] = path.resolve("./styles");
    config.resolve.alias["@config"] = path.resolve("./config");
    return config;
  },
};
