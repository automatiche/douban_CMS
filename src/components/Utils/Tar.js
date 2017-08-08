import React ,{Component}  from 'react'
import MovieServices from '../../service/MovieServices'


export default class Tar extends Component{
      constructor(props){
        super(props);
        this.state = {
            tar:this.props.match.params.tar,
            tarobj:{}
        }
    }
    getTargettar = () =>{
        var promise =  MovieServices.getTargettar(this.state.tar);
        promise.then((data)=>{
            this.setState({
                tarobj:data
            })
        })
    } 
    componentDidMount = ()=>{
        this.getTargettar();
    }
    componentWillReceiveProps = (nextprops) =>{
        this.setState({
            tar:nextprops.match.params.tar,
        },function(){
            this.getTargettar()
        })
    }  

    wtfor = ()=>{
        var list = [];
        var i = 0;
        for (var Key in  this.state.tarobj){
                list.push(<p key={i++}>{this.state.tarobj[Key]}</p>)
            }
        return list;  
    }
    render(){
        return (
            <div style={{width:160,height:130,backgroundColor:'lightgrey'}}>
                 {this.wtfor()} 
            </div>
        )
    }
}