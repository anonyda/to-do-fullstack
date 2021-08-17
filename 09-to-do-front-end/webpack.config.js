const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
    entry: {
        app: path.resolve(__dirname, 'src', 'app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './src/[name].bundle.js'
    },
    mode: 'none',
    plugins: [
        new MiniCssExtractPlugin({filename: './styles/style.css'}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['app'],
            favicon: "./image/favicon.ico"
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use:[MiniCssExtractPlugin.loader, 'css-loader' ] },
            {
             test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
             type: 'asset/resource',
            },
        ],
    }
}

module.exports = config