/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: PRODUCTION ? 'production' : 'development',
  devtool: PRODUCTION ? '' : 'source-map',
  target: 'electron-main',
  externals: [nodeExternals()],
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main/Main.ts',
  output: {
    path: `${__dirname}/dist/main`,
    filename: 'main.js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: ['.ts'],
    alias: { '@': path.resolve(__dirname, 'src') }
  }
}
