import React,{Component} from 'react'
import  {Affix,Button}   from 'antd'

import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;//

import CommentList from '../Commit/CommentList'

import Recommand from './Recommand'

import {Route ,Link,Redirect} from 'react-router-dom'


export default class HomeContainer extends Component{
    constructor(props){
        super(props);
        this.state={
        }  
    }


    render() {
        return <div style={{width:'100%',height:"100%"}}>
            <Recommand></Recommand>
            <CommentList></CommentList>
        </div>
    }
}