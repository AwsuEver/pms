const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')

const path = require('path')

module.exports = override(

  // 配置antd使用less修改样式
  fixBabelImports('import', {
    libraryName: 'antd',    
    libraryDirectory: 'es',
    style: true
  }),

  // 配置路径别名
  addWebpackAlias({
    ['@']: path.resolve(__dirname, './src')
  })

);