const path = require('path')
const htmlWebpackHtml = require('html-webpack-plugin')


module.exports  = {
    mode:'development',
    entry :path.join(__dirname, './src/main.js'),
    output : {
        path: path.join(__dirname, './dist'),
        filename:'bundle.js'
    },
    devServer: {
        open : true,
        port : 3000,
        contentBase : 'src',
        hot : true
    },
    module:{
        rules : [
            { test : /\.less$/, use : [ 'style-loader', 'css-loader', 'less-loader' ] },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { test : /\.js$/, use : {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                  plugins: [require('@babel/plugin-proposal-class-properties')]
                }  
            }, exclude : /node_modules/ },
            { test : /\.(jpg|png|gif|bmp|jepg)$/, use : 'url-loader' },
            { test : /\.(ttf|eot|svg|woff|woff2)$/, use : 'url-loader'}
        ]
    },
    plugins: [
        new htmlWebpackHtml({
            title:"CRUISE",
            template: path.join(__dirname, './src/index.template.html'),
            filename : 'index.html'
        })
    ]
}