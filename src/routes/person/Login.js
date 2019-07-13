import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Modal } from 'antd';
import { Link } from 'react-router-dom'
import md5 from 'blueimp-md5'
import { login } from '../../api/person';
import action from '../../store/action';

function loginFail() {
  const modal = Modal.error({
    title: '登录失败',
    content: '请稍后重试'
  })
  setTimeout(() => {
    modal.destroy()
  }, 3000);
}

export class Login extends Component {
  handleSubmit = e => {
    // 阻止默认行为
    e.preventDefault();
    // 进行表达的验证
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let { username, password } = values
        password = md5(password)
        let ret = await login({
          name: username,
          password: password
        })
        if (parseFloat(ret.code) === 0) {
          // 更新最新值
          this.props.queryBaseInfo()
          // 跳回上一级
          this.props.history.go(-1)
          return
        }
        loginFail()
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="personLoginBox">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            {/* Or <a href="">register now!</a> */}
            Or <Link to='/person/register'>register now!</Link>
          </Form.Item>
        </Form>
      </div>
    )
  }
}


export default Form.create()(connect(null, action.person)(Login));