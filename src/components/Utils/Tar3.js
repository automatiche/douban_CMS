import React,{Component}  from 'react'
import MovieServices from '../../service/MovieServices'

export default class Tar3 extends Component{
    constructor(props){
        super(props);
        this.state = {
            tar:this.props.match.params.tartar,
            tarobj:[]
        }
    }
    getTargettartar = () =>{
        var promise =  MovieServices.getTargettartar(this.state.tartar);
        promise.then((data)=>{
            console.log(data)
            this.setState({
                tarobj:data
            })
        })
    } 
    componentDidMount = ()=>{
        this.getTargettartar();
    }
    render(){
        return (
            <div style={{width:160,backgroundColor:'yellow'}}>
                <p>tar:{this.state.tar}</p>
                <div>tarobj:
                    {this.state.tarobj.map((item,i)=>{
                        return (
                            <div key={i}>
                                <p>{i}</p>
                                <span>第一tjf項:<br/>
                                    {item.tj0.tjf}
                                </span>
                                <br/>
                                <span>第二tjs項:<br/>
                                    {item.tj0.tjs}
                                </span>
                                <br/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
} 