const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		path.join(__dirname, 'src', 'index'),
		'babel-polyfill',
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8081',
		'webpack/hot/only-dev-server'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	devServer: {
		contentBase: './public'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: /src/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s?css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	}
};