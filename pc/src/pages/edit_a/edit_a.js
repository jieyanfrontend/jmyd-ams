import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import CommonModalConfig from '../../config/common-modal';
import CommonFormConfig from '../../config/common-form';
import request from '../../helpers/request';
import hasErrors from '../../helpers/has-errors';
class EditA extends Component{
  render(){
    let { selectedItem, visible, form } = this.props;
    let { isFieldTouched, getFieldError,getFieldsError, getFieldDecorator } = form;
    let editVisible = visible.edit;
    let { editType, id, wf_id, title, creator, create_time } = selectedItem;
    let modalTitle = editType === 'edit' ? '编辑' : '删除';
    let titleError = isFieldTouched('title') && getFieldError('title');
    let wf_idError = isFieldTouched('wf_id') && getFieldError('wf_id');
    let reasonError = isFieldTouched('reason') && getFieldError('reason');
    let isDisabledBtn = editType === 'edit' ? hasErrors(getFieldsError(['title', 'wf_id'])) : hasErrors(getFieldsError(['reason']));
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={this.closeModal}>取消</Button>
        <Button type='primary' disabled={isDisabledBtn} onClick={this.ensure}>确定</Button>
      </React.Fragment>
    );
    return (
      <Modal visible={editVisible} title={`${modalTitle}----一级明细`} onCancel={this.closeModal} footer={<ModalFooter/>} {...CommonModalConfig}>
        <Form>
          <Form.Item label='编号' { ...CommonFormConfig}>{id}</Form.Item>
          <Form.Item
            help={wf_idError ? wf_idError : ''}
            validateStatus={wf_idError ? 'error':''}
            label='效率100编号' { ...CommonFormConfig}>
            {editType !== 'edit' ? wf_id : getFieldDecorator('wf_id', {
              initialValue: wf_id,
              rules: [{
                required: true,
                message: '请输入效率100编号'
              }]
            })(
              <Input/>
            )}
          </Form.Item>
          <Form.Item
            label='标题'
            help={titleError ? titleError : ''}
            validateStatus={titleError ? 'error':''}
           { ...CommonFormConfig}>
            {editType !== 'edit' ? title : getFieldDecorator('title', {
              initialValue: title,
              rules: [{
                required: true,
                message: '请输入标题'
              }]
            })(
              <Input/>
            )}
          </Form.Item>
          <Form.Item label='创建人' { ...CommonFormConfig}>{creator}</Form.Item>
          <Form.Item label='创建时间' { ...CommonFormConfig}>{create_time}</Form.Item>
          {editType === 'edit' ? null : (
            <Form.Item
            style={{display: editType === 'edit' ? 'none' : 'block'}}
            help={reasonError ? reasonError : ''}
            validateStatus={ reasonError ? 'error' : ''}
            label='删除原因' { ...CommonFormConfig}>
            {getFieldDecorator('reason', {
              rules: [{
                required: true,
                message: '请输入删除原因'
              }]
            })(
              <Input placeholder='必填'/>
            )}
            </Form.Item>
          )}
        </Form>
      </Modal>
    )
  }
  componentDidMount(){
    this.props.form.validateFields();
  }
  ensure = () => {
    let selectItem = this.props.selectedItem;
    let { getFieldsError } = this.props.form;
    let canPost = !hasErrors(getFieldsError());
    if(canPost){
      if(selectItem.editType === 'edit'){
        this._edit();
      }else{
        this._delete();
      }
    }
  };
  _edit = () => {
    let { form } = this.props;
    let { wf_id, title } = form.getFieldsValue();
    let id = this.props.selectedItem.id;
    request({
      url: '/api/alert_flow',
      data: {
        id,
        wf_id,
        title
      },
      success: (data) => {
        this.closeModal();
      },
      fail: () => {
        // this.closeModal();
      }
    })
  };
  _delete = () => {
    let { form } = this.props;
    let { reason } = form.getFieldsValue();
    let id = this.props.selectedItem.id;
    request({
      url: '/api/delete_flow',
      data: {
        id,
        reason
      },
      success: () => {
        this.closeModal();
      },
      fail: () => {
        // this.closeModal();
      }
    })
  };
  closeModal = () => {
    let { setVisible } = this.props;
    setVisible(false)
  }
  
}
export default Form.create()(EditA);