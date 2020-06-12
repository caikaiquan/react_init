import React from 'react'
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth, login, logout , setName  } from '../../../redux/auth.redux.js'
import './sign.scss'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signType: 1, // 账号登录
      user:this.props.user
    }
    this.onFinish = this.onFinish.bind(this)
    this.changeSignType = this.changeSignType.bind(this)
  }
  componentWillMount(){
    
  }
  render () {
    return (
      <div className='sign'>
        <div className="container">
          <div className="sign-type">
            <p className={this.state.signType === 1 ? "active" : ""} onClick={() => { this.setState({ signType: 1 }) }}>账号密码登录</p>
            <p className={this.state.signType === 2 ? "active" : ""} onClick={() => { this.setState({ signType: 2 }) }}>手机号登录</p>
          </div>
          <div className="form">
            <Form
              name="basic"
              className="login-form"
              initialValues={{ remember: false }}
              onFinish={this.onFinish}
              size="large"
            >
              {
                this.state.signType === 1 ? (
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                  >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名: admin" />
                  </Form.Item>) : null
              }
              {
                this.state.signType === 1 ? (
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码！' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="密码: 123"
                    />
                  </Form.Item>) : null
              }
              {
                this.state.signType === 2 ? (
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: '请输入手机号！' }]}
                  >
                    <Input prefix={<MobileOutlined className="site-form-item-icon" />} placeholder="手机号" />
                  </Form.Item>
                ) : null
              }
              {
                this.state.signType === 2 ? (
                  <Form.Item>
                    <Row gutter={[16, 0]}>
                      <Col className="gutter-row" span={16}>
                        <Form.Item
                          name="code"
                          rules={[{ required: true, message: '请输入验证码！' }]}
                        >
                          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="验证码" />
                        </Form.Item>
                      </Col>
                      <Col className="gutter-row" span={8}>
                        <Form.Item >
                          <Button size="large" block>获取验证码</Button>
                        </Form.Item>

                      </Col>
                    </Row>
                  </Form.Item>
                ) : null
              }
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>自动登录</Checkbox>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <span className="login-form-forgot">忘记密码</span>
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" block>
                  登 录
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/register" className='fr'>注册账户</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div >
    )
  }
  onFinish (form) {
    this.props.login({user:form.username})
    this.props.history.push("/home")
  }
  changeSignType (type) {
    console.log('切换登录方式', type)
  }
}


Login = connect(state => state.auth, { auth, login, logout , setName })(Login)
export default Login