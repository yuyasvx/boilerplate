module.exports = {
  lintOnSave: false,
  publicPath: './',
  outputDir: 'dist/renderer',
  pages: {
    index: {
      // entry for the page
      entry: 'src/renderer/apps/main/Main.ts',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/renderer/apps/about/About.ts',
      template: 'public/index.html',
      filename: 'about.html',
      title: 'About'
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    target: 'electron-renderer'
  }
}
