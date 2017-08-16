/**
 * Created by Fefe on 8/10/2017.
 */

const path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    // Entry point where webpack should look for imported files.
    entry: "./src/index.js",

    // Output file once webpack bundles everything
    output: {
        filename: 'webpack-bundle.js',
        path: path.resolve(__dirname, '')
    },

    module: {
        rules: [ // Loaders go here
            // Babel Loader
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            },

            // SVG Loader
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },

            // CSS Loader
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },

            // SASS Loader
            {
                test: /\.scss$/,
                use : [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }
                ]
                //loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ] // End rules
    },

    plugins: [
        new ExtractTextPlugin('public/bundled.css', {allChunks: true})
    ]
};

module.exports = config;