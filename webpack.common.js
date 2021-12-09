import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import { __dirname, packageJson } from './node-env.js';

export default {
	entry: './src/react/main.tsx',
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	output: {
		filename: `${packageJson.name}-${packageJson.version}.bundle.js`,
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: [ 'babel-loader' ],
				exclude: /node_modules/
			},
			{
				test: /\.(scss|sass)$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/static/index.html' }),
		new CleanWebpackPlugin({ protectWebpackAssets: false, cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'] })
	]
};
