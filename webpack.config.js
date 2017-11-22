var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
    entry: __dirname + "/src/index.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path: __dirname + "/dist",//打包后的js文件存放的地方
        filename: "index.js"//打包后的js文件名
    },

    plugins: [
    	new webpack.BannerPlugin('版权所有，翻版必究'),
    	new webpack.HotModuleReplacementPlugin(),
	    new HtmlwebpackPlugin({
	       template: __dirname + "/src/index.html"//html模版地址
	     })
	],

    module: {
    	loaders: [
    		{
            	test:/\.css$/,
            	loader:"style-loader!css-loader"
            }, {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            	query: {
                    presets: ['react','es2015'],
                    "plugins":[
                        ["import",{"libraryName":"antd","style":"css"}]
                    ]
                }
            }
        ]
    },

    //webpack-dev-server配置
    devServer: {
        contentBase: "./src",//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
    	hot: true
    }

};