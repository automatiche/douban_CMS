import React from 'react'
import ReactDOM from 'react-dom'
import Comment from './Comment'
import CommentIn from './CommentIn'

class CommentList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           comments : ""
        }
    }
    static defaultProps = {
        comments : [ { user: '崽', content: '有人告诉我，爱情像杯酒' }, { user: 'Peanutbutter',content: '阿爸对你非常失望' }]
    }
    
    createComment = (item,i)=>{
        /*return <Comment content={item.content} user={item.user} key={i}></Comment>*/
        //属性扩散
        return <Comment {...item} key={i}></Comment>
    }
    componentWillMount(){
        localStorage.setItem('comments',JSON.stringify(this.props.comments));
        this.getCommentListFromLocalStorage();
    }
    //从本地存储中获取评论内容
    getCommentListFromLocalStorage = ()=>{
        var list = JSON.parse(localStorage.getItem('comments'));
        this.setState({
            comments:list
        })   
    }

    render(){
        return <div>
            {/*把父组件的getCommentListFromLocalStorage方法传给子组件的props属性，子组件调用之以改变父组件的state值。
            但是这里没有直接传递，是子组件通过保存localstorage更新父组件方法直接改变父组件view的*/}
            <CommentIn updateList = {this.getCommentListFromLocalStorage}></CommentIn>
            {/* 渲染Comment,使用初始值，之后每次输入提交后更新comments为‘每次输入提交后保存在localstorage中的的值’，再渲染 */}
            {this.state.comments.map(this.createComment)}
        </div>
    }
}

export default CommentList;