import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

 class ModelForm extends Component {
      componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
      
      //当你点击提交的时候会自动进行校验以及获取到你表单中的数据
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log(values);
          }
        });
      };
    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('booksName') && getFieldError('booksName');
        const passwordError = isFieldTouched('booksAuth') && getFieldError('booksAuth');

        return (
            <Form layout="horizontal" onSubmit={this.handleSubmit}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>

              {getFieldDecorator('booksName', {
                rules: [
                        { required: true, message: '书籍的作者是必须填写的' },
                        {validator:this.handlevalidator}
                    ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入书籍名称"
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('booksAuth', {
                rules: [{ required: true, message: '书籍的作者是必须填写的' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  placeholder="请输入书籍作者"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" >
                修改信息
              </Button>
            </Form.Item>
          </Form>
        )
    }
    handlevalidator(rule, value, callback){
        if(value!='123'){
            callback('内容有误');
        }else{
            callback();
        }
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(ModelForm);

export default WrappedHorizontalLoginForm