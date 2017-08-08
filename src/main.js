import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
  
import HomeContainer  from './components/Home/HomeContainer'
import MovieContainer  from './components/Movie/MovieContainer'
import AboutContainer  from './components/About/AboutContainer'

import {HashRouter as Router,hashHistory, Route,Link,IndexRoute,Switch,Redirect} from 'react-router-dom'
import Login from './components/Login/LoginContainer'

/* import {Layout}  from 'antd'
const Content= Layout */
{/* Switch里面
                    <App>
                        <Content style={{ height: '100%', backgroundColor: 'white' }}>
                            <Route path="/home" component={HomeContainer}></Route>
                            <Route path="/movie" component={MovieContainer}></Route>
                            <Route path="/about" component={AboutContainer}></Route>
                        </Content>
                    </App> 
*/}
                
// react-router 4 problems  但ignored好像也没有什么影响
/* Warning: You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored */

class Main extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Redirect from='/' exact to='/app'></Redirect> 
                    <Route path='/app' component={App}> </Route> 
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Main></Main>,document.getElementById('app'));