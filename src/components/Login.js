import React, { Component } from 'react';
import { Menu, Modal, Button, Input, Form } from 'antd';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginCancel = this.handleLoginCancel.bind(this);
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loginSubmit();
      }
    });
  }
  handleLoginCancel(e){
    this.props.loginCancel();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        className="modal_login"
        width="350px"
        title="ВХОД"
        footer={[
          <Button key="submit" type="primary" onClick={this.handleLogin}>
            Войти
          </Button>,
        ]}
        visible={this.props.showLog}
        onOk={this.handleLogin}
        onCancel={this.handleLoginCancel}
      >
        <Form onSubmit={this.handleLogin}>
          <FormItem
            label="E-mail"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="Password"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
const WrappedLoginForm = Form.create()(Login);

export default WrappedLoginForm;