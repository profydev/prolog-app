module.exports = {
  api: {
    input: "https://prolog-api.profy.dev/api-json",
    output: {
      target: "./api/generated-api.ts",
      override: {
        mutator: "./api/axios.ts",
      },
    },
  },
};
