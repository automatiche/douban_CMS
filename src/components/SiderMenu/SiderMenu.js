import { Menu, Icon, Button,Layout } from 'antd';
import React from 'react'
const SubMenu = Menu.SubMenu;
const {Sider} = Layout

import {Link,Redirect} from 'react-router-dom'

export default class SiderMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    collapsed: false,
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    // this.props.toggleCollapse();
  }
  render() {
    return (
      //修改宽度，在某个classname todo
    <Sider
            trigger={null}
            breakpoint="md"
            collapsedWidth="0"
            collapsed={this.props.collapsed}            
            style={{overflowY: 'auto'}}
        >
        {/* 无法同时实现响应式布局和trigger按钮todo */}
        {/*<Button type="primary" onClick={this.toggle} style={{ marginBottom: 16}}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <div className="logo"  style={{width:160,marginLeft:20}}/>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Dashboard</span>
            <Link to='/app/dashboard'></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Manage</span>
            <Link to='/app/manage'></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Features</span>
            <Link to='/app/features'></Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navi One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navi Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
     </Sider> 
    );
  }
}
