module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist/renderer',
  chainWebpack: config => {
    // webpack ビルドの設定を上書き(https://forum.vuejs.org/t/how-can-i-create-two-separate-bundles-with-vue-cli-3/30353)
    // 詳細は：https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md

    // デフォルトのエントリーポイントの定義を消す
    config.entryPoints.delete('app')

    // 新しいパスで定義し直す
    config
      .entry('app')
      .add('./src/renderer/main.ts')
      .end()
  },
  productionSourceMap: false,
  configureWebpack: {
    target: 'electron-renderer'
  }
}
