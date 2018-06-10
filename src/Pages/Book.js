import React, { Component } from 'react';
import { Modal, Button, Input, Form, Card, Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Book extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.handleBook = this.handleBook.bind(this);
  }

  handleBook(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.loginSubmit();
      }
    });
  }

  handleSelectChange(value){
    console.log(value);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{width: "100%",height : "100%"}}>
        <img src="http://www.kartinki24.ru/uploads/gallery/main/168/kartinki24ru_paraplan_05.jpg" />
        <div className="overlay flex item-cnt justify-center">
          <Card style={{width: 520}}>
            <Form onSubmit={this.handleBook}>
              <FormItem
                label="Name"
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: 'Please input your Name!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Phone number"
              >
                {getFieldDecorator('phone', {
                  rules: [{
                    required: true, message: 'Please input your Phone number!',
                  }],
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
                label="IIN"
              >
                {getFieldDecorator('iin', {
                  rules: [{
                    type: 'number', message: 'The input is not valid IIN!',
                  },{
                    required: true, message: 'Please input your IIN!',
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Выберите способ оплаты"
              >
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: 'Please select your gender!' }],
                })(
                  <Select
                    placeholder="Select a option and change input text above"
                    onChange={this.handleSelectChange}
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem className="flex justify-center">
                <Button type="primary" htmlType="submit">Забронировать</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

const WrappedBookForm = Form.create()(Book);

export default WrappedBookForm;