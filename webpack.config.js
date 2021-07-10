const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")


const PRODUCTION_ENV = "production"
const DEVELOPMENT_ENV = "development"
const isDevelopment = process.env.NODE_ENV !== PRODUCTION_ENV

const getDevtool = () => {
	return isDevelopment ? "eval-source-map" : "source-map"
}

module.exports = {
	mode: isDevelopment ? DEVELOPMENT_ENV : PRODUCTION_ENV,
	devtool: getDevtool(),
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		isDevelopment && new ReactRefreshWebpackPlugin({

		})
	].filter(Boolean),
	module: {
		rules: [
			{
				test: /\.(j|t)sx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							isDevelopment && require.resolve("react-refresh/babel")
						].filter(Boolean)
					}
				} 
			},
			// {
			//     test: /\.css$/,
			//     exclude: /node_modules/,
			//     use: ['style-loader', 'css-loader'] 
			// },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'] 
			}
		]
	}
}