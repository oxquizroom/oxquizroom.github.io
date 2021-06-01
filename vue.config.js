const path = require('path')

module.exports = {
  // lintOnSave: false,
  // publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/style/common.less')
      ]
    }
  }
}
