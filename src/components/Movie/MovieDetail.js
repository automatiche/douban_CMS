import React,{Component} from 'react'
import MovieServices from '../../service/MovieServices'
import {Spin, Alert,Button,Icon}  from 'antd'
export default class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieInfo:{},
            isLoading:true
        }
    }
    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
            <Icon type="left" />返回电影列表
            </Button>
            {this.createMovieDetail()}
        </div>
    }
    goBack=()=>{
        this.props.history.go(-1);
    }
    createMovieDetail = ()=>{
        if(this.state.isLoading){  //正在请求电影数据 显示loading
            return <Spin tip="Loading...">
                <Alert
                    message="正在加载电影详细数据"
                    description="请稍等..."
                    type="info"
                />
            </Spin>
        }else{
        var movie = this.state.movieInfo;
        return <div>
            <h1 style={{textAlign:'center'}}>{movie.title}</h1>
            <div style={{textAlign:'center'}}>
                <img src={movie.images.large} alt=""/>
            </div>
            <h4>主要演员</h4>
            <div style={{display:'flex'}}>
                {movie.casts.map((item,i)=>{
                    return <div style={{margin:'5px'}}  key={i}>
                        <img src={item.avatars.small} alt=""/>
                        <h5>{item.name}</h5>
                    </div>
                })}
            </div>
            <h4>剧情简介:{movie.summary}</h4>
            <p></p>
        </div>
        }
    }
    componentDidMount(){
        // this.state.movieIndo.id?也可以先给它赋值吧
        var promise = MovieServices.getMovieDetailById(this.props.match.params.id);
        promise.then((data)=>{
            console.log(data)
            this.setState({
                movieInfo:data,
                isLoading:false
        })
        })
        
    }
}