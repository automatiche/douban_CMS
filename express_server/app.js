var express = require('express');
var request = require('request');
var app = express();
//在node.js中设置允许跨域
app.use('*', function (req, res, next) {
	// 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});
//监听 请求/getmovielist 时 表示用户想要获取电影列表数据
//请求这个地址时，需要传递一个参数表示要请求数据的类型  所以url地址类似： /getmovielist?type=in_theaters
//如何接受url路径中的参数？  req.query.***


app.get('/getmovielist',function(req,res){
    var type = req.query.type;
    //拼接 豆瓣真实的url地址
    var url = "https://api.douban.com/v2/movie/" + type;
    //使用第三方模块request
    // 使用第三方模块 request，来进行数据的请求
    request(url, function (error, response, body) {
        // body 中存放的，就是我们要获取的真实数据
        console.log(body);
        res.send(body);
    });
    // 使用本地数据
/*  var jsonObj = require('./nodetest/datas/'+ type +'.js');
    res.send(jsonObj); */
})
app.get('/getdetail',function(req,res){
    var id = req.query.id;
    var url = "https://api.douban.com/v2/movie/subject/" + id;
    request(url, function (error, response, body) {
        // body 中是要获取的真实数据
    res.send(body);
    });

})
//试图请求网络上css,有错误，有更好的办法
/* app.get('/getdoubancss',function(req,res){
    var url = "https://img3.doubanio.com/f/movie/7f6f0e38cc4876703551d357780d32181a8dfdcd/css/movie/home.css";
    request(url,function(error,response,body){
        res.send(body);
    })
}) */
//测试createElement方法创建  本地src  的script标签
/* app.get('/scr.js',function(req,res){
    var url = "./nodetest/src.js";
    var jsonObj = require(url);
    res.send(jsonObj)
}) */
//测试
 app.get('/gettargettar',function(req,res){
    var tar = req.query.tar;
    var url = "./nodetest/"+tar+".json";
    var jsonObj = require(url);
    res.send(jsonObj)
})
app.get('/gettargettartar',function(req,res){
    
    var url = "./nodetest/targettartar.json";
/*     request(url,function(error,response,body){
        res.send(body);
    }) */
    var jsonObj = require(url);
    res.send(jsonObj)
}) 

app.listen(3090,function(){
    console.log('server  on http://127.0.0.1:3090')
})
