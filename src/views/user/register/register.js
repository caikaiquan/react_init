import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Select, } from 'antd';
import './register.scss'

const { Option } = Select;

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonTxt: "获取验证码",
      codeFlag: false, // 是否可以点击获取验证码
    }
    this.onFinish = this.onFinish.bind(this)
    this.getCode = this.getCode.bind(this)
  }

  render () {
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select
          style={{
            width: 75,
          }}
        >
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      </Form.Item>
    );
    return (
      <div className="register">
        <div className="container">
          <div className="form-name">
            注册
          </div>
          <div className="form">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true, prefix: '86' }}
              onFinish={this.onFinish}
              size="large"
            >
              <Form.Item
                name="mail"
                rules={[
                  { type: 'email', message: '邮箱地址格式错误！' },
                  { required: true, message: '邮箱地址格式错误！' }
                ]}
              >
                <Input placeholder="邮箱" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { min: 6, message: '密码不能小于6位' },
                  { required: true, message: '请输入密码！' },
                ]}
              >
                <Input
                  type="password"
                  placeholder="至少6位密码，区分大小写"
                />
              </Form.Item>
              <Form.Item
                name="pass"
                rules={[{ required: true, message: '请输入密码！' }]}
              >
                <Input
                  type="password"
                  placeholder="确认密码"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="手机号" />
              </Form.Item>
              <Form.Item>
                <Row gutter={[16, 0]}>
                  <Col className="gutter-row" span={16}>
                    <Form.Item
                      name="code"
                      rules={[{ required: true, message: '请输入验证码！' }]}
                    >
                      <Input placeholder="验证码" />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" span={8}>
                    <Form.Item >
                      <Button onClick={this.getCode} size="large" block disabled={this.state.codeFlag}>{this.state.buttonTxt}</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  注 册
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/login" className='fr'>使用已有账户登录</Link>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    )
  }

  onFinish (form) {
    console.log(form)
  }

  getCode () {
    if (this.state.codeFlag) {
      return
    }
    let time = 60;
    this.setState({ codeflag: true, buttonTxt: `${time} s`, codeFlag: true })
    let dateInter = setInterval(() => {
      time--;
      if (time > 0) {
        this.setState({ buttonTxt: `${time} s` })
      } else {
        this.setState({ buttonTxt: "获取验证码", codeFlag: false })
        clearInterval(dateInter)
      }
    }, 1000);
  }
}


export default Register