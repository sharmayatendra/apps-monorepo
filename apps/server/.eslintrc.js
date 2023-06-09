module.exports = {
  ...require('@apps-monorepo/eslint-config-custom/eslint-server.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
