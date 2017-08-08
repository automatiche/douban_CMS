
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import {Link} from 'react-router-dom'

import { gitOauthToken, gitOauthInfo ,gitOauthLogin} from '../../axios';
import { queryString } from '../utils/queryString';
import avater from '../../images/disappointed.jpg';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import '../../css/app.css'

export default class HeaderContainer  extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            width: '0', 
            height: '0'
        }
    }
    componentDidMount() {
        //第三方登录未完成，未能获取用户信息
        const QueryString = queryString();

        // 本地输入 localstorage key=userMessage
        var userMessages = JSON.parse(localStorage.getItem('userMessage'));console.log(userMessages)
        const userM = userMessages.userName; 

        //第三方github  localstorage key=user
        //尝试取可能保存着的github信息，给个初始值否则报错
        const _user = JSON.parse(localStorage.getItem('user'))||'no_git';
        //没有值则初始化取github的用户信息
        if (!_user && QueryString.hasOwnProperty('code')) {
            gitOauthToken(QueryString.code).then(res => {
                gitOauthInfo(res.access_token).then(info => {
                    console.log(info)
                    this.setState({
                        user: info /*  .username? */
                    });
                    localStorage.setItem('user', JSON.stringify(info));
                });
            }); 
        } else if(_user=='no_git'){     //没取到gitbug就显示正常登陆记录的用户名
            this.setState({
                   user: userM||'游客'
                })
        } else{                         //成功取到github优先使用它
            this.setState({
                   user: _user
                })
        }

    //注册resize  DOM 事件
    this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

    };
    updateWindowDimensions = ()=>{
        this.setState({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    componentWillUnmount = ()=>{
        window.addEventListener("resize",this.updateWindowDimensions);
    }
    render(){
        return (
                <Header className="custom-theme" style={{backgroundColor:'#fff', height: 60,paddingRight:20,paddingLeft:20}}>
                    <Icon
                        className="trigger custom-trigger"
                        type={this.props.collapsed ?  'menu-fold':'menu-unfold'}
                        onClick={this.props.toggle}
                        style={{cursor:'pointer'}}
                    />
                    {/* 响应式菜单todo  通过手动更改结构和样式 */}
                    <Menu
                        theme="light"
                        mode={this.state.width>550?"horizontal":"inline"}
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '60px' ,float:'right',paddingRight:-50}}
                    >
                        <Menu.Item key="1"><Link to='/app'>首页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/app/movie'>电影</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/app/about'>关于</Link></Menu.Item>

                        <SubMenu   title={<span className="avatar"><img src={avater} alt="头像" style={{width:40, height:40,borderRadius:20,verticalAlign:'middle'}}/><i className="on bottom b-white" /></span>}>
                            <MenuItemGroup title="用户中心">
                                <Menu.Item key="setting:1">你好 -{this.state.user}</Menu.Item>
                                <Menu.Item key="setting:2"><Link to='/login'>退出</Link></Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="设置中心">
                                <Menu.Item key="setting:3">个人设置</Menu.Item>
                                <Menu.Item key="setting:4">系统设置</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
{/*                 这格式怎么用？
                    <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: 40px;
                    }
                `}</style>   */}          
                </Header>
        )
    }
}
