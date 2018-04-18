import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import style from './login.css';
import request from '../../helpers/request';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginSuccess: false
        }
    }

    render(){
        let { loginSuccess } = this.state;
        const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form;
        const userNameErr = isFieldTouched('userName') && getFieldError('userName');
        const passwordErr = isFieldTouched('password') && getFieldError('password');
        return (
            <div className={style.container}>
                {loginSuccess ? <Redirect to='/'/>: null}
                <div className={style.form}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus={userNameErr ? 'error' : ''} help={userNameErr || ''}>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input size={'large'} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordErr ? 'error' : ''} help={passwordErr || ''}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input type='password' size={'large'} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                        </Form.Item>
                        <Form.Item  className={style.login_btn_group}>
                            <Button
                                disabled={this.hasErrors(getFieldsError())}
                                size={'large'} type="primary" htmlType="submit" className={style.login_btn}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.form.validateFields();
    }
    handleRequest = ({userName, password}) => {
          request({
              url: "/api/login",
              data: {
                  user: userName,
                  password: password
              },
              success:(data) => {
                  this.setState({
                      loginSuccess: true
                  })
              },
              fail: (data) => {
                  console.log('fail');
              }
          })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(err){

            }else{
                this.handleRequest(values);
            }
        });
    };
    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
}
let LoginForm = Form.create()(Login);
export default LoginForm;