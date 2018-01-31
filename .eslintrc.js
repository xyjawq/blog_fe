// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止条件表达式中出现赋值操作符
    "no-cond-assign": 'error',
    // 禁止重复的 case 标签
    "no-duplicate-case": 'error',
    // 禁止不必要的分号
    "no-extra-semi": 'off',
    // 禁止数字字面量中使用前导和末尾小数点
    "no-floating-decimal": 'error',
  }
}
