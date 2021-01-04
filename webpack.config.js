const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function makeConfig(mode) {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV, mode);

  return {
    mode,
    entry: ['./client/index.tsx'],
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: mode === 'development' ? '[path][name]__[local]' : '[contenthash]',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                additionalData: '@import "client/assets/scss/global.scss";',
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', 'json'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '/client', 'index.html'),
        filename: 'index.html',
      }),
    ],
    devServer: {
      hot: true,
      disableHostCheck: true,
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'client'),
      compress: true,
      port: 3000,
    },
    devtool: 'source-map',
  };
}

module.exports = (env, argv) => {
  return makeConfig(argv.mode);
};
