const { cwd } = require('node:process'); //current working directory
const { resolve } = require('node:path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, flags) => {
    const isProd = flags.mode === 'production';

    return {
        mode: isProd ? 'production' : 'development',
        context: resolve(cwd(), './src'),
        devtool: 'source-map',
        entry: {
            main: './index'
        },
        output: {
            path: resolve(cwd(), './dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        resolve: {
            extensions: ['.tsx','.ts', '.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader'
                },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './index.html',
                inject: 'head',
                scriptLoading: 'defer'
            })
        ]

    };
}