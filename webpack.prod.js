'use strict';

const webpack = require('webpack');
//抽取css到单独的文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'src/dist'),
    }
};
const indexHtmlConfig = {
    title: 'react-boilerplate',
};

let config = {
    // performance: {
    //     hints: false
    // },
    context: paths.context,
    entry: {
        // babel-polyfill——支持async/await语法
        // whatwg-fetch是为了支持fetch语法
        app: ['whatwg-fetch', 'babel-polyfill', './index.js'],
        react: ['react', 'react-dom', 'react-addons-css-transition-group', 'react-redux', 'react-router', 'redux', 'react-tap-event-plugin']
    },
    output: {
        path: paths.output.path,
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin([paths.output.path]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.bundle.js'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        // 默认情况下，React 将会在开发模式，很缓慢，在生产模式下使用 React，不会产生warning，并且速度较快
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin({
            //去掉注释
            comments: false,
            compress: {
                //忽略警告,要不然会有一大堆的黄色字体出现
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: indexHtmlConfig.title,
            template: 'index.ejs',
            hash: true,
            excludeChunks: ['react']
        })
    ],
    resolve: {
        //当在css中@import css出错“can’t find ___”可以开启以下resolve
        // modules: [paths.context, 'node_modules'],

        //为资源文件取别名，缩短引用的路径
        alias: {
            // react: path.resolve(paths.src, 'vendor/react/react.min.js'),
        }
    },
    module: {
        rules: [{
            // 模块必须在你的 bundle 中被 require() 过，否则他们将不会被暴露！！！
        //     test: require.resolve('jquery'),
        //     use: [{
        //         loader: 'expose-loader',
        //         options: '$'
        //     }, {
        //         loader: 'expose-loader',
        //         options: 'jQuery'
        //     }]
        // }, {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-1', 'stage-2', 'stage-3', 'react'],
                    plugins: [
                        // es6默认使用严格模式，所以一些采用非严格模式的第三方库会报错，禁用严格模式：
                        ['transform-remove-strict-mode']
                    ]
                }
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        url: true
                    }
                }, 'postcss-loader']
            })
        }, {
            test: /src[\/\\]components[\/\\].*\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        url: true
                    }
                }, 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /(node_modules|src[\/\\]styles)[\/\\].*\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        url: true
                    }
                }, 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.(gif|jpg|jpeg|png|woff|woff2|svg|eot|ttf)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 2 * 1024,
                    name: '[path][name].[ext]'
                }
            }]
        }]
    }
};

module.exports = config;
