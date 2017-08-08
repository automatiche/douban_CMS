import React from 'react'

import styles from './Style'
export default class Comment extends React.Component{
    render(){
    return <div style={styles.divStyle}>
        <h3 style={styles.h3Style}>评论内容：{this.props.content}</h3>
        <h5 style={styles.h5Style}>评论人：{this.props.user}</h5>
    </div>
    }
 
}