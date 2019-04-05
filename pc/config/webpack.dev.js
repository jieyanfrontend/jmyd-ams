const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:'development',
    entry:path.join(__dirname,'../src/index.js'),
    output:{
        filename:'[name].js',
        chunkFilename:'[name].js',
        publicPath:'/',
        path:path.join(__dirname,'../dist'),
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:path.join(__dirname,'../node_modules')
            },
            {
                test:/\.(css|less|s[ac]ss)$/,
                exclude:path.join(__dirname,'../node_modules'),
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                ]
            },
            {
                test:/\.(css|less|s[ac]ss)$/,
                include:path.join(__dirname,'../node_modules'),
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|otf|ttf)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name:'[path][name].[ext]',
                        outputPath: 'assets/'
                    }
                }]
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../src/index.html'),
        })
    ],
    devServer:{
        port:8000,
        proxy:{
            '/api':'http://120.237.31.12:8327'
        },
        publicPath: '/',
        contentBase:path.join(__dirname,'../dist')
    }
};
module.exports = config;