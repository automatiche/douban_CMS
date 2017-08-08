import { Carousel } from 'antd';
import React from 'react'
 //服务器请求失败--
// import MovieServices from '../../service/MovieServices'



// import 'https://img3.doubanio.com/f/movie/c6e9d9d9866b5b4d8a5f1a8cb9f70f864950ea05/css/movie/gallery.css'
// require('https://img3.doubanio.com/f/movie/c6e9d9d9866b5b4d8a5f1a8cb9f70f864950ea05/css/movie/gallery.css') 
// import '../../css/douban.css'
import '../../css/douban_all.css'
import '../../css/doubanRecommand.css' 
import '../../css/CarouselStyle.css'
//改为动态添加在html里
// import '../../css/doubanGalley.css'

export default class Recommand extends React.Component {
    constructor(props){
        super(props);
    }


/*      createCss =()=>{
        var cssObj = document.createElement('link');
        cssObj.rel = 'stylesheet';
        cssObj.type = 'text/css';
        cssObj.href = 'https://img3.doubanio.com/f/movie/c6e9d9d9866b5b4d8a5f1a8cb9f70f864950ea05/css/movie/gallery.css';
        document.head.appendChild(cssObj)
        console.log(document)
    } 添加在body里，这个body应该是html的body */
    createCss =()=>{
        var cssObj = document.createElement('link');
        cssObj.rel = 'stylesheet';
        cssObj.type = 'text/css';
        cssObj.href = 'https://img3.doubanio.com/f/movie/c6e9d9d9866b5b4d8a5f1a8cb9f70f864950ea05/css/movie/gallery.css';
        document.getElementById('dd').appendChild(cssObj)
    }

/*      createJs =()=>{
        var cssJs = document.createElement('script');
        cssJs.src =require("./src.js");//get http://localhost:3456/src.js --- 本地使用require()
        // document.getElementById('dd').appendChild(cssJs)
        // document.body.appendChild(cssJs)
        document.getElementById('dd').appendChild(cssJs)    
    }  */

    componentDidMount(){
        this.createCss();
        // this.createJs()
    }
    render() {
        return (
            <div id="dd">
                <p style={{fontFamily:'黑体',fontSize:14}}>热门推荐</p>
                <Carousel autoplay>
                    <div>
                        <li className="ui-slide-item">
                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2729">
                                    <img src={require("../../images/1 (6).jpg")} alt="《猎杀星期一》发中字预告" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://m.douban.com/page/fcseb34?from=gallery" target="_blank" data-fid="2729">
                                            <h3>《猎杀星期一》发中字预告</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            龙纹身女孩一人分饰七胞胎~
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>

                    <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2732">
                                    <img src={require("../../images/1 (4).jpg")} alt="2017最美动画电影《至爱梵高》正式预告" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://movie.douban.com/trailer/220119/?from=gallery" target="_blank" data-fid="2732">
                                            <h3>2017最美动画电影《至爱梵高》正式预告</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            全球首部手绘油画动画长片！125位画师，65000幅油画打造~
                            </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </div>
                    <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2728">
                                    <img src={require("../../images/1 (1).jpg")} alt="《心理罪》提前观影+映后与廖凡、导演交流" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://www.douban.com/event/29203126/?from=gallery" target="_blank" data-fid="2728">
                                            <h3>《心理罪》提前观影+映后与廖凡、导演交流</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            不但能提前看片，映后还能在现场跟“丑帅男神”廖凡与导演谢东燊面对面交流！机不可失，小手动起来吧~
                            </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </div>
                    <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2721">
                                    <img src={require("../../images/1 (3).jpg")} alt="天地有大美而需言，这些事物惊艳了你我的眼" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://www.douban.com/note/630570709/?from=gallery" target="_blank" data-fid="2721">
                                            <h3>天地有大美而需言，这些事物惊艳了你我的眼</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            我们从#我见过的地球神奇一刻#中挑选了不同角度的参与作品，一起来看看小伙伴们记录的这个瑰丽星球的神奇一刻。
                            </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </div>
                    <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2726">
                                    <img src={require("../../images/1 (2).jpg")} alt="高分同志片《请以你的名字呼唤我》首发预告" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://movie.douban.com/trailer/219970/?from=gallery" target="_blank" data-fid="2726">
                                            <h3>高分同志片《请以你的名字呼唤我》首发预告</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            甜茶与大锤演绎夏日初恋。今天你撸桃了吗？
                                </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </div>
                    <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href={"javascript:void(0);"} data-fid="2730">
                                    <img src={require("../../images/1 (5).jpg")} alt="《昼颜》电影版首发中字预告" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://movie.douban.com/trailer/220045/?from=gallery" target="_blank" data-fid="2730">
                                            <h3>《昼颜》电影版首发中字预告</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            上户彩&amp;斋藤工再续禁忌之恋~
                            </p>
                                    </div>
                                </div>
                            </div>

                        </li>

                    </div>
{/*                     <div>
                        <li className="ui-slide-item">

                            <div className="gallery-frame">
                                <a href="https://m.douban.com/page/fcseb34?from=gallery" target="_blank" data-fid="2729">
                                    <img src="https://img1.doubanio.com/view/movie_gallery_frame_hot_rec/normal/public/9ec0dcea2c704f8.jpg" alt="超生游击队来了！《猎杀星期一》发中字预告" width="350" height="240" />
                                </a>
                                <div className="gallery-detail">
                                    <div className="gallery-hd">
                                        <a href="https://m.douban.com/page/fcseb34?from=gallery" target="_blank" data-fid="2729">
                                            <h3>超生游击队来了！《猎杀星期一》发中字预告</h3>
                                        </a>
                                    </div>
                                    <div className="gallery-bd">
                                        <p>
                                            龙纹身女孩一人分饰七胞胎~
                            </p>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </div> */}
                </Carousel>
            </div>
        )
    }
}   

    
/*     getdoubanCss = () =>{
        var promise = MovieServices.getdoubanCss();
        var cssObj = {};
        promise.then(function(data){
            console.log(data)
            var cssObj = data;
        })
    }
    componentDidMount=()=>{
        this.getdoubanCss();
    } 
    请求错误，可能是格式问题，response没有具体内容
    */