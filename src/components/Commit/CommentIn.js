import React,{Component} from 'react'

import styles from './Style'
export default class CommentIn extends Component{
    render(){
        return <div>
            <h5>用户名</h5>
            <input type="text" ref="user"/>
            <h5>评论内容</h5>
            <textarea ref="content" name="" id="" cols="40" rows="6"></textarea>
            <input type="button" value="提交评论" id="btn" style={styles.summitButton} onClick={this.submitComment}/>
        </div>
    }
//用户名与登录信息不相关
    submitComment = () =>{
        //ref使用回调函数的话更好
        var user = this.refs.user.value.trim();
        var content = this.refs.content.value.trim();
        //保存到localstrage中 先读取之前的 再把新增的加上去 
        
        var list = JSON.parse(localStorage.getItem('comments')||'[]');
        list.unshift({user:user,content:content});
        localStorage.setItem('comments',JSON.stringify(list));
 
/*         localStorage.setItem('comments',JSON.stringify(JSON.parse(localStorage.getItem('comments')||'[]').unshift({user:user,content:content})));    */
        //调用父组件传递过来的更新父组件的列表数据的方法
        this.props.updateList();
        this.refs.user.value = "";
        this.refs.content.value = "";
        
    }
}