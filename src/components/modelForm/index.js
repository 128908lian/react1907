import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import SelectStatus from "../select"
import Checkboxcom from "../checkbox"
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
        let {booksAuth,booksName,booksStatus,booksTag} = this.props.record
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        const usernameError = isFieldTouched('booksName') && getFieldError('booksName');
        const passwordError = isFieldTouched('booksAuth') && getFieldError('booksAuth');

        return (
            <Form layout="horizontal" onSubmit={this.handleSubmit}  labelCol={{sm: { span: 5 }}}  wrapperCol={{sm: { span: 18 },}}>
            <Form.Item
               label="书籍名称"
               validateStatus={usernameError ? 'error' : ''} 
               help={usernameError || ''}>

              {getFieldDecorator('booksName', {
                rules: [
                  { required: true },
                  { validator:this.handlevalidator}],
                initialValue:booksName
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="请输入书籍名称"
                />,
              )}
            </Form.Item>
            <Form.Item 
              label="书籍作者"
              validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('booksAuth', {
                rules: [{ required: true, message: '书籍的作者是必须填写的' }],
                initialValue:booksAuth
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="text"
                  placeholder="请输入书籍作者"
                />,
              )}
            </Form.Item>
            <Form.Item 
              label="书籍状态"
              validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('booksStatus',{
                rules:[ { required: true }],
                 initialValue:booksStatus
              })(
               <SelectStatus/>
              )}
            </Form.Item>
            <Form.Item 
              label="书籍类型"
              validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('booksTag',{
                 rules:[ { required: true }],
                 initialValue:booksTag
              })(
                <Checkboxcom/>
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
        if(!value){
            callback('书籍的作者是必须填写的');
        }
        callback()

    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(ModelForm);

export default WrappedHorizontalLoginForm