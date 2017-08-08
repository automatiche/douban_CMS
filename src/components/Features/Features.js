import React,{Component} from 'react'
import {Route ,Link,Redirect} from 'react-router-dom'
import  {Affix,Button}   from 'antd'

import Tar  from '../Utils/Tar'
import Tar3  from '../Utils/Tar3'

export default class Features extends Component{
    constructor(props){
        super(props);
        this.state={
            buttonValue:this.props.buttonValue,
            numberMi:this.props.numberMi
        }
        
    }
    static defaultProps={
        numberMi:0,
        buttonValue:'are you OK?',
        thankyou:['are you OK?','im very OK','how r u','india mi fans','do u like mi4i?','hello india mifan','do you like mi band']
    }
    handleButton = (e) =>{
        console.log("before"+this.state.numberMi)
        this.setState({
            numberMi:this.state.numberMi==(this.props.thankyou.length-1)?0:++this.state.numberMi,//a++无效？a+1 a++ ++a 以及在setstate内部的情形 使用回调函数会有作用---
        },function(){
            this.setState({
                buttonValue:this.props.thankyou[this.state.numberMi]
            })
        })
    }
    render(){
        return (
            <div>
                >
                <Link to='/app/features/tar/tar1'>tar1</Link>>
                <Link to='/app/features/tar/tar2'>tar2</Link>>
                <Link to='/app/features/tar/tar/tar3'>tar3</Link>
                <hr/>
                <div style={{width:160,border:"1px dashed tan"}}>
                    <Route path='/app/features/tar/:tar' exact component={Tar}></Route>
                    <Route path='/app/features/tar/tar/:tartar'  component={Tar3}></Route> 
                    <Redirect to="/app/features/tar/tar1"></Redirect>
                </div>
                <Affix style={{ position: 'absolute', bottom:100, right: 50}}>
                    <Button ref='button' style={{backgroundColor:'lightgrey'}} onClick={this.handleButton}>{this.state.buttonValue}</Button>
                </Affix>
            </div>
        )
    }
}