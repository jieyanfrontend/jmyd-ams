import React, {Component} from 'react';
import {Modal, Input, Button, Form, Icon} from 'antd';
import CommonModalConfig from '../../config/common-modal';
import CommonFormConfig from '../../config/common-form';
import request from '../../helpers/request';
import hasErrors from '../../helpers/has-errors';
class EditB extends Component{
    render(){
        let { selectedItem, visible, form } = this.props;
        let { isFieldTouched, getFieldError,getFieldsError, getFieldDecorator } = form;
        let editVisible = visible.edit;
        let { editType, wf_id, title, creator, create_time, file_type, remark, file_id } = selectedItem;
        let modalTitle = editType === 'edit' ? '编辑' : '删除';
        let titleError = isFieldTouched('title') && getFieldError('title');
        let wf_idError = isFieldTouched('wf_id') && getFieldError('wf_id');
        let remarkError = isFieldTouched('remark')&& getFieldError('remark');
        let reasonError = isFieldTouched('reason') && getFieldError('reason');
        let isDisabledBtn = editType === 'edit' ? hasErrors(getFieldsError(['title', 'wf_id'])) : hasErrors(getFieldsError(['reason']));
        let ModalFooter = () => (
            <React.Fragment>
                <Button onClick={this.closeModal}>取消</Button>
                <Button type='primary' disabled={isDisabledBtn} onClick={this.ensure}>确定</Button>
            </React.Fragment>
        )
        return(
            <Modal visible={editVisible} title={`${modalTitle}----二级明细`} onCancel={this.closeModal} footer={<ModalFooter/>} {...CommonModalConfig}>
                <Form>
                    <Form.item label='文件类型' {...CommonFormConfig}>{file_type}</Form.item>
                    <Form.item label='效率100编号' {...CommonFormConfig}>{wf_id}</Form.item>
                    <Form.item label='标题'{...CommonFormConfig}>{title}</Form.item>
                    <Form.item label='文件名称'{...CommonFormConfig}>{file_id}</Form.item>
                    <Form.item label='创建人'{...CommonFormConfig}>{creator}</Form.item>
                    <Form.item label='创建时间'{...CommonFormConfig}>{create_time}</Form.item>
                    <Form.item
                        label='备注'
                        help={remarkError ? remarkError : ''}
                        validateStatus={remarkError ? 'error': ''}
                        {...CommonFormConfig}>
                        {editType !== 'edit' ? remark : getFieldDecorator('remark',{
                            initialValue: remark,
                        })(
                            <Input/>
                        )}
                    </Form.item>
                    <Form.item label=''{...CommonFormConfig}>
                        <Button><Icon type="upload" />打开附件</Button>
                         xx文件.txt
                    </Form.item>
                    {editType === 'edit' ? null :(
                        <Form.item
                        style={{display: editType === 'edit' ? 'none' : 'block'}}
                        help={reasonError ? reasonError : ''}
                        validateStatus={reasonError ? 'reason': ''}
                        label='删除原因' {...CommonFormConfig}>
                            {getFieldDecorator('reason',{
                                rules:[{
                                    require: true,
                                    message: '请输入删除原因',
                                }]
                            })(<Input placeholder='必填'/>)
                            }
                        </Form.item>
                    )
                    }
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
        let canPost = !hasErrors(getFieldsError);
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
        let { wf_id, title} = form.getFieldsValue();
        let id = this.props.selectedItem.id;
        request({
            url: '/api/alert_flow',
            data:{
                id,
                wf_id,
                title
            },
            success:() => {
                this.closeModal();
            },
            fail:() => {

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
export default Form.create()(EditB);