const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './gitment.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'gitment.browser.js',
    libraryTarget: 'var',
    library: 'Gitment',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /^node_mocules/,
        loaders: ['babel-loader'],
      },
    ],
  },
}
<link rel="stylesheet" href="/css/spoiler.css" type="text/css"><script src="/js/spoiler.js" type="text/javascript" async></script>