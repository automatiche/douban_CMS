import React, { Component } from 'react'
import MovieServices from '../../service/MovieServices'
import { Spin, Alert, Rate } from 'antd'
import {Link}  from 'react-router-dom'

import '../../css/Movielist.css'

export default class MovieList extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:this.props.match.params.type,
            isLoading:true,
            movielist:[]
        }
    }

    render() {
        return <div>
            {this.createMovieList()}
        </div>
    }

    //遍历的封装
    createItem = (item,i)=>{
                    return <div className="movie-item" key={i} style={{ textAlign:'center',boder:'1px solid #ddd',width:'192px',height:'230px',margin:'5px', padding:'5px',cursor:'pointer'}} onClick={()=>{this.goDetail(item.id)}}>
                        {/* <Link to={"/app/movie/detail/"+item.id}>Link详细</Link>  */}
                        <img src={item.images.medium} alt="" width="100" height="140"/>
                        <h5>{item.title}</h5>
                        <p><strong>电影类型:</strong>{item.genres.join(',')}</p>
                        <p><strong>上映年份:</strong>{item.year}年</p>
                        <div><strong>评分</strong><Rate disabled defaultValue={item.rating.average/2} /></div>
                    </div>
                };

    createMovieList = ()=>{
        if(this.state.isLoading){  //正在请求电影数据 显示loading
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影数据"
                    description="请稍等..."
                    type="info"
                />
            </Spin>
        }else{
            return <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movielist.map(this.createItem)}
            </div>
        }

    }
    goDetail = (id) =>{
         this.props.history.push('/app/movie/detail/' + id); 

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.match.params.type)
        //当组件的属性被改变是时候  会触发这个事件 可以监听到当前最新的电影类型
        //根据监听到是最新的电影类型 重新调用数据请求的方法
        this.setState({
            type:nextProps.match.params.type,
            isLoading : true
        },function(){
            this.getMovieListByType()
        })
    }
    // componentDidMount(){
        //请求数据
        //直接无法请求 fatch也不行 因为豆瓣限制 这里怎样直接跨域 jsonp?  但是这里通过nodejs本地的服务器
        //设置请求头来跨域 
        // var url = "https://api.douban.com/v2/movie/" + this.state.type;
        // var url = "http://127.0.0.1:3090/getmovielist?type=" + this.state.type;

        //可以用jqury发起异步请求 但是不推荐

        //fetch('url')  调用fetch之后 会返回一个promise对象，数据可以通过 promise对象进行操作

/*        fetch(url).then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data)
        });*/

/*        fetch("./src/components/Movie/data.js").then(function(response){
            return response.json();

        }).then(function(data){
            console.log(data)
        });*/

    // }
    componentDidMount(){
        this.getMovieListByType();
    }
    getMovieListByType = ()=>{
        var promise = MovieServices.getMovieListByType(this.state.type);
        promise.then((data)=>{
            //数据请求成功后，讲电影数据保存在state上，isloading为false,隐藏效果，显示数据
            this.setState({
                movielist:data.subjects,
                isLoading:false
            });
        })
    }
}