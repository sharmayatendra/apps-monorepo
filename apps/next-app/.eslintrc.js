module.exports = {
  ...require('@apps-monorepo/eslint-config-custom/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
