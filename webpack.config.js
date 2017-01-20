const webpack = require('webpack');
const path = require('path');

const outputDir = path.resolve(__dirname, './');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV === 'development' ? 'inline-source-map' : null,

  context: path.resolve(__dirname, 'src'),
  entry: './main',
  output: {
    path: outputDir,
    filename: '[name].js',
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.pug'],
  },

  module: {
    loaders: [{
      test: /\.pug$/,
      loader: 'pug',
    }, {
      test: /\.scss$/,
      loader: 'style!css?minimize!sass?resolve url!postcss',
    }, {
      test: /\.js$/,
      loader: 'babel',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loaders: [
        'url?limit=10000&name=img/[name].[ext]?[hash]',
        'image-webpack',
      ],
    }],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
  ],

  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
      progressive: true,
    },
    pngquant: {
      quality: '65-80',
      speed: 4,
    },
    svgo: {
      plugins: [
        { removeComments: true },
        { removeMetadata: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeViewBox: true },
        { convertColor: true },
      ],
    },
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: outputDir,
    historyApiFallback: true,
  },
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unused: true,
        collapse_vars: true,
      },
    })
  );
}
