const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
	devtool: 'inline-cheap-source-map',
	entry: {
		app: './src/index.js',
		fourOfour: './src/404.js',
		about: './src/about.js',
		contact: './src/contact.js',
		error404: './src/error404.js',
		project: './src/project.js',
		project01: './src/project01.js',
		project02: './src/project02.js',
		project03: './src/project03.js',
		project04: './src/project04.js',
		project05: './src/project05.js',
		thanks: './src/thanks.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'] // translates CSS into CommonJS
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
			// {
			// 	test: /\.less$/,
			// 	use: ['less-loader'] // compiles Less to CSS
			// },
			// {
			// 	test: /\.(png|svg|jpg|jpeg|gif|ttf|eot|woff|woff2)$/,
			// 	use: ['file-loader']
			// }
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'commons.js',

			children: true
			// (use all children of the chunk)
			//
			// async: true,
			// // (create an async commons chunk)
			//
			// minChunks: 3
			// // (3 children must share the module before it's separated)
		}),
		new HtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'project01.html',
			template: './src/project01.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'project02.html',
			template: './src/project02.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'project03.html',
			template: './src/project03.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'project04.html',
			template: './src/project04.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'project05.html',
			template: './src/project05.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './src/about.html'
		}),
		new HtmlWebpackPlugin({
			filename: '404.html',
			template: './src/404.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'error404.html',
			template: './src/error404.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'project.html',
			template: './src/project.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'thanks.html',
			template: './src/thanks.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'contact.html',
			template: './src/contact.html'
		}),
		new UglifyJSPlugin()
	]
};

module.exports = config;
