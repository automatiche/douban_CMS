import React,{Component} from 'react'

import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;//
const { Content, Sider } = Layout;
//一个app里一般只写一个HashRouter
import {Route,Link,Redirect} from 'react-router-dom'

import '../../css/MovieConteiner.css'

//导入movielist
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
export default class MovieContainer extends Component{
    render() {
        return <Layout style={{height:"100%"}}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%'}}
                >
                        <Menu.Item key="1"><Link to="/app/movie/in_theaters">正在热映</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/app/movie/coming_soon">即将上映</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/app/movie/top250">TOP250</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout>

                <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
                    {/*电影列表路由规则*/}
                    <Route path="/app/movie/:type" exact component={MovieList}></Route>
                    {/*电影详细路由规则*/}
                    <Route path="/app/movie/detail/:id" component={MovieDetail}></Route>
                    <Redirect to="/app/movie/in_theaters"></Redirect>
                </Content>
            </Layout>
        </Layout>
    }
}