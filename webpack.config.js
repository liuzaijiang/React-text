var webpack = require('webpack');
module.exports = {
    entry: {
		bundle:__dirname + "/app/main.js",
		vendor:["react","react-dom"]
		},
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    },
	module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		output: {
			comments: false,  // remove all comments
		},
		compress: {
			warnings: false
		}
		}),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
		new webpack.DefinePlugin({
		'process.env': {
		NODE_ENV: JSON.stringify('production')
		}
		}),
    ]
};
