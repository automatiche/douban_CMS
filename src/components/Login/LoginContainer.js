/*.feat me...   yezihaohao/react-admin*/
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import {gitOauthLogin,gitHref}  from '../../axios'


class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                window.location.hash = '/app';
                //本地存储
                localStorage.setItem('userMessage',JSON.stringify(values));

            }
        });
    };
    //第三方登录
/*     gitHub = () => {
        //gitOauthLogin;
         window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin'; 
    }; */
    gitHub = gitHref;
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{width:'100%',height:'100%',display:'flex',backgroundColor:'tan'}}> 
                <div className="login"style={{margin:'auto'}}>
                    <div className="login-form" >
                        <div className="login-logo"  style={{paddingBottom:10,fontSize:14}}>
                            <span>用户登录</span>
                        </div>
                        <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' },{min:4,message:"密码应大于3位"}],//密码长度如何在提交时校验而不是监听每一次输入？
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                    登录
                                </Button>
                                或 <a href="">现在就去注册!</a>
                                <p>
                                     <span  style={{cursor:"pointer"}} onClick={this.gitHub}><Icon type="github"/>(第三方登录) </span>
                                </p>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);