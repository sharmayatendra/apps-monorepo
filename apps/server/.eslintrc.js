module.exports = {
  ...require('@apps-monorepo/eslint-config-custom'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
