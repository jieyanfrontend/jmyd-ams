let { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const root = process.cwd();
module.exports = {
    mode: 'production',
    context: resolve(root, 'src'),
    entry: {
        app: './index.js'
    },
    output: {
        filename: 'scripts/[name].[hash].js',
        path: resolve(root, 'dist'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/](?!antd)/,
                    name: 'vendor',
                    chunks: 'initial'
                },
                ant: {
                    test:/antd.*\.js$/,
                    name: 'antd',
                    chunks: 'async'
                }
            }
        },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({}),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          }),
        ]

    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/](?!antd)/,
    //                 name: 'vendor',
    //                 enforce: true,
    //                 chunks: 'all'
    //             },
    //             antd: {
    //                 test:/antd.*\.js$/,
    //                 name: 'antd',
    //                 enforce: true,
    //                 minChunks: 3
    //             }
    //         }
    //     }
    // },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            exclude:/node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        importLoaders: 0,
                        localIdentName: '[name]__[local]'
                    }
                }
            ]
        }, {
            test:/\.css$/,
            include: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },{
            test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|otf|ttf)$/i,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[path]/[name].[ext]",
                        outputPath: 'assets/'
                    }
                }
            ]
        }]
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(['scripts', 'styles', 'assets', '*.*'],{
            root: resolve(root, 'dist')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            favicon: './favicon.ico'
        })
    ]
};