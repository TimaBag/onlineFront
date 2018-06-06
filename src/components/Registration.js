import React, { Component } from 'react';
import { Menu, Modal, Button, Input, Form } from 'antd';

const FormItem = Form.Item;

class Registration extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
    this.handleReg = this.handleReg.bind(this);
    this.handleRegCancel = this.handleRegCancel.bind(this);
  }

  handleReg = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.regSubmit();
      }
    });
  }
  handleRegCancel(e){
    this.props.regCancel();
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        className="modal_reg"
        title="СОЗДАТЬ АККАУНТ"
        width="350px"
        footer={[
          <Button key="submit" type="primary" onClick={this.handleReg}>
            Создать
          </Button>,
        ]}
        visible={this.props.showReg}
        onOk={this.handleReg}
        onCancel={this.handleRegCancel}
      >
        <Form onSubmit={this.handleReg}>
          <FormItem
            label="Nickname"
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
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
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
          <FormItem
            label="Confirm Password"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const WrappedRegForm = Form.create()(Registration);

export default WrappedRegForm;