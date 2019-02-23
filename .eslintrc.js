module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends':[
        'plugin:vue/essential',
        'google',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'linebreak-style': 0,
        'max-len': 0,
        'require-jsdoc': 0,
        'no-trailing-spaces': 0,
        'no-unused-vars': 1,
      },
      parserOptions: {
        parser: 'babel-eslint'
      }
};