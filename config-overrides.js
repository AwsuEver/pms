const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')

const path = require('path')

module.exports = override(   
  // 配置antd使用less修改样式
  fixBabelImports('import', {
    libraryName: 'antd',    
    libraryDirectory: 'es',
    // style: 'css'
    style: true,
  }),
  // 修改antd默认样式
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled:true ,
  //     ModifyVars:{
  //       '@primary-color': '#1DA57A'
  //     } 
  //   },
  // }),    
  // 配置路径别名
  addWebpackAlias({
    ['@']: path.resolve(__dirname, './src')
  })

);