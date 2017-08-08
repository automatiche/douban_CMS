var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/main.js'), //入口
    output: {
        path: path.join(__dirname, 'dist'), // 输出目录
        filename: 'bundle.js' // 输出文件名
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: ['style-loader', {loader:'css-loader',options: { modules: true }}]  如何使用import加载网络上的css文件？
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use: 'url-loader'
            },
            {
                // test: /\.(js|jsx)$/,
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // devServer: { //  --open --port 3000 --hot    devserver这里配置比较灵活，但我的无法打开
    //     open: true, // 自动打开浏览器
    //     port: 8080, // 指定端口号   //会打开8080sundefined
    //     hot: true, // 指定启用热更新
    //     inline: true
    // },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'), // 指定模板
            filename: 'index.html'
        })
    ]
    // 还是不行
    
}