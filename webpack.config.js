const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '*', '.js', '.jsx' ],
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  devServer: {
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'http://other-server.example.com',
        secure: false,
      },
    },
    hot: true,
  },
};
