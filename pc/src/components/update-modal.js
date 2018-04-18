import React from 'react';
import { Modal, Form, Input, Button, Alert } from 'antd';
class UpdateModal extends React.Component{
  render(){
    let { visible, close, type } = this.props;
    const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form;
    const typeNameErr = isFieldTouched('task_type_name') && getFieldError('task_type_name');
    const timeWarnErr = isFieldTouched('time_warn') && getFieldError('time_warn');
    const timeOutErr = isFieldTouched('time_out') && getFieldError('time_out');
    return <Modal
      footer={<div>
        <Button onClick={() => close()}>取消</Button>
        <Button type={'primary'} onClick={() => this.ensure()} disabled={this.hasErrors(getFieldsError(['task_type_name','time_warn', 'time_out']))}>确认</Button>
      </div>}
      visible={visible} title={'你正在编辑 '+ type.task_type_name}>
        <Form>
          <Form.Item
            validateStatus={typeNameErr ? 'error' : ''} help={typeNameErr || ''}
            label='任务类型'>
            {getFieldDecorator('task_type_name', {
              rules: [{
                required: true,
                message: '请输入任务类型名称'
              }]
            })(
              <Input onChange={() => this.handleChange()} disabled={true}/>
            )}
          </Form.Item>
          <Form.Item
            validateStatus={timeWarnErr ? 'error' : ''} help={timeWarnErr || ''}
            label='预警时间'>
            {getFieldDecorator('time_warn', {
              rules: [{
                required: true,
                message: '请输入预警时间'
              }]
            })(
              <Input addonAfter={'小时 '}/>
            )}
          </Form.Item>
          <Form.Item
            validateStatus={timeOutErr ? 'error' : ''} help={timeOutErr || ''}
            label='超时时间'>
            {getFieldDecorator('time_out', {
              rules: [{
                required: true,
                message: '请输入超时时间'
              }]
            })(
              <Input addonAfter={'小时'}/>
            )}
          </Form.Item>
        </Form>
      <Alert type='warning' message='注意：编辑该任务类型的预警时间及超时时间将会影响相同任务类型的预警时间和超时时间'/>
    </Modal>
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.type.task_type_id !== this.props.type.task_type_id){
      this.setValue(nextProps.type);
    }
  }
  setValue = (type) => {
    this.props.form.setFields({
      task_type_name: {
        value: type.task_type_name
      },
      time_warn: {
        value: type.time_warn
      },
      time_out: {
        value: type.time_out
      }
    })
  };
  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };
  ensure = () => {
    let value = this.props.form.getFieldsValue();
    let type = this.props.type;
    this.props.ensure({
      task_type_id: type.task_type_id,
      ...value
    });
  }
}
let UpdateModalForm = Form.create()(UpdateModal);
export default UpdateModalForm;