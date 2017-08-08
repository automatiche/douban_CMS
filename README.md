## 版本

    "react": "^15.5.4",
    "react-router-dom": "^4.1.1",
    "webpack": "^2.6.1",
    "antd": "^2.10.4",
    "echarts-for-react": "^1.4.4",
	"axios": "^0.16.2",
    "babel-loader": "^7.0.0"
    "express": "^4.15.3",
    "request": "^2.81.0"
    "require": "^2.4.20"
	node v6.10.3
	npm 3.10.10

## 说明
<img src="./src/images/Image1.png?raw=true" alt="图片名称" align=center />
<img src="./src/images/Image2.png?raw=true" alt="图片名称" align=center />
豆瓣电影api请求的电影数据展示，加上半个后台管理系统，ui框架基于antd，一些细节还在完善中。。。
部分参考了这位前辈的作品https://github.com/yezihaohao

根目录里的express_server是node.js的express创建的一个中间服务器，这里基本用来请求数据。因为是单独写的，所以没有一一合并，直接把文件夹放进来了，试了下可以用，里面是它的modules和pakege.json,单独cd到子目录里安装，应该是没问题的

## Quick Start
先在express_server目录里运行 node app,再在根目录运行npm run dev 。它们的端口号分别是3090和3456


