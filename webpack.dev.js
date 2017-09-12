'use strict';

const webpack = require('webpack');
const path = require('path');
// 抽取css到单独的文件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 自动生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'src/dist'),
    },
    server: {
        // 静态资源所在的目录，通俗点相当于浏览器访问的index.html所在的目录，类似nginx中的root
        contentBase: path.resolve(__dirname, 'src/dist'),
        // dev-server 打包的bundle文件所在的相对于根目录的路径
        publicPath: '/'
    }
};

const indexHtmlConfig = {
    // 自动生成的html的标题
    title: 'react-boilerplate',
};

let config = {
    // performance: {
    //     hints: false
    // },
    devtool: 'source-map',
    context: paths.context,
    entry: {
        // babel-polyfill support async/await
        // whatwg-fetch support fetch
        app: ['whatwg-fetch', 'babel-polyfill', 'react-hot-loader/patch', './index.js'],
        react: ['react', 'react-dom', 'react-addons-css-transition-group', 'react-redux', 'react-router', 'redux', 'react-tap-event-plugin']
    },
    output: {
        path: paths.output.path,
        filename: '[name].bundle.js',
        publicPath: paths.server.publicPath
    },
    plugins: [
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin(),
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
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: indexHtmlConfig.title,
            template: 'index.ejs',
            hash: true,
            excludeChunks: ['react']
        }),
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
            use: ['react-hot-loader/webpack', {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-1', 'stage-2', 'stage-3', 'react'],
                    plugins: [
                    // es6默认使用严格模式，所以一些采用非严格模式的第三方库会报错，禁用严格模式：
                        ['transform-remove-strict-mode']
                    ],
                    sourceMaps: true
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        url: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test: /src[\/\\]components[\/\\].*\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        url: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }, {
            test: /(node_modules|src[\/\\]styles)[\/\\].*\.(sass|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        url: true,
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
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
    },
    devServer: {
        // 局域网访问
        disableHostCheck: true,
        host: '0.0.0.0',
        port: '8880',
        // 静态资源目录
        contentBase: paths.server.contentBase,
        // 启用gzip压缩
        compress: true,
        // 启用模块热替换
        hot: true,
        // 反向代理
        proxy: {
            '/api': {
                target: 'http://localhost:8800',
                changeOrigin: true
            }
        }
    }
};

module.exports = config;
