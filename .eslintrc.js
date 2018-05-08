module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn', // console 警告
    'no-var': 'error', // 禁止使用var
    'no-unused-vars': 'warn', // 未使用的变量
    'no-extra-semi': 'error', // 禁止不必要的分号
    'comma-dangle': [2, 'always-multiline'], // 数组和对象键值对最后一个逗号
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'computed-property-spacing': [2, 'never'], // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    indent: ['error', 2, { SwitchCase: 1 }], // 空格两个
    'linebreak-style': ['error', 'unix'], // 换行分割
    quotes: ['error', 'single'], // 单引号
    semi: ['warn', 'never'], // 无分号结尾
    curly: 'error', // if语句后面必须要括号
  },
}
