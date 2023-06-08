module.exports = {
    ...require('eslint-config-custom/eslint-server.js'),
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: './tsconfig.json',
    },
}