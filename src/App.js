import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Layout,Menu,Icon } from 'antd'
const { Header,Footer,Sider,Content} = Layout
import SiderMenu from './components/SiderMenu/SiderMenu'

import {Route,Link,Redirect} from 'react-router-dom'
import HomeContainer  from './components/Home/HomeContainer'
import MovieContainer  from './components/Movie/MovieContainer'
import AboutContainer  from './components/About/AboutContainer'

import HeaderContainer from './components/Head/HeadContainer' 

import Dashboard from './components/Dashboard/Dashboard' 
import Manage from './components/Manage/Manage'
import Features from './components/Features/Features' 
 
var styles = {
    layout0Style: {height:'100%'},
    contentStyle:{backgroundColor:'white',paddingLeft:10,paddingTop:5},
    footerStyle : { display: 'flex', height: 50, padding: 0, justifyContent: 'center', alignItems: 'center', boxSizing: "contentBox" }/* boxSizing为何被覆盖 */ 
}

export default class App extends Component{
    constructor(props){
        super(props);
    }
    state = {
        collapsed:false
    }
    toggle=()=>{
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render(){
        return (
            <Layout className="ant-layout-has-sider" style={styles.layout0Style}>
                <SiderMenu collapsed={this.state.collapsed}></SiderMenu> 
                <Layout style={{height:'100%'}}>
                    <HeaderContainer  toggle={this.toggle} collapsed={this.state.collapsed}></HeaderContainer>                     
                    <Content style={styles.contentStyle}>
                        <Route path="/app" exact component={HomeContainer}></Route>
                        <Route path="/app/tar"  component={HomeContainer}></Route>
                        <Route path="/app/movie" component={MovieContainer}></Route>
                        <Route path="/app/about" component={AboutContainer}></Route>
                        <Route path="/app/dashboard" component={Dashboard}></Route>
                        <Route path="/app/manage" component={Manage}></Route>
                        <Route path="/app/features" component={Features}></Route>
                    </Content>
                    <Footer style={styles.footerStyle}>
                    豆瓣电影api ©2017 Created by 吔茶
                    </Footer>
                </Layout>
            </Layout>
        )      
    }
}
