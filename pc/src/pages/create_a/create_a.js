import React, {Component} from 'react';
import {Form, Modal, Input, Upload, Button, Icon, DatePicker} from 'antd';
import commonFormProps from '../../config/common-form';
import commonModalProps from '../../config/common-modal';
import request from '../../helpers/request';
import hasErrors from '../../helpers/has-errors';
import store from "../batch_process/store";

class CreateA extends Component {
    state = {
        fileList: []
    };
    uploadProps = {
        onChange: ({fileList}) => {
            this.setState({
                fileList
            })
        },
        beforeUpload: () => false,
        onRemove: () => {
            this.props.form.setFieldsValue({
                file: null
            });
            this.setState({
                fileList: []
            }, () => {
                this.props.form.validateFields();
            })
        }
    };

    render() {
        let {form, setVisible, visible} = this.props;
        let {fileList} = this.state;
        let createVisible = visible.create;
        let {getFieldDecorator, isFieldTouched, getFieldError, getFieldsError} = form;
        let wf_idErr = isFieldTouched('wf_id') && getFieldError('wf_id'),
            titleErr = isFieldTouched('title') && getFieldError('title'),
            fileErr = isFieldTouched('file') && getFieldError('file');
        let ModalFooter = () => (
            <React.Fragment>
                <Button onClick={() => setVisible(false)}>取消</Button>
                <Button type='primary' disabled={hasErrors(getFieldsError())} onClick={this.createA}>确认</Button>
            </React.Fragment>
        );
        return (
            <Modal visible={createVisible} title='创建任务' footer={<ModalFooter/>}
                   onCancel={() => setVisible(false)} {...commonModalProps}>
                <Form>
                    <Form.Item
                        help={wf_idErr ? wf_idErr : ''}
                        validateStatus={wf_idErr ? 'error' : ''}
                        label='效率100编号' {...commonFormProps}>{
                        getFieldDecorator('wf_id', {
                            rules: [{
                                required: true,
                                message: '请输入效率100编号'
                            }]
                        })(
                            <Input/>
                        )
                    }</Form.Item>
                    <Form.Item
                        help={titleErr ? titleErr : ''}
                        validateStatus={titleErr ? 'error' : ''}
                        label='标题' {...commonFormProps}> {
                        getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题'
                            }]
                        })(
                            <Input/>
                        )
                    }</Form.Item>
{/*                    <Form.Item
                        help={titleErr ? titleErr : ''}
                        validateStatus={titleErr ? 'error' : ''}
                        label='创建时间' {...commonFormProps}> {
                        getFieldDecorator('create_time', {
                            rules: [{
                                required: true,
                                message: '请输入创建时间'
                            }]
                        })(
                            <DatePicker />
                        )
                    }</Form.Item>*/}
                    <Form.Item
                        help={fileErr ? fileErr : ''}
                        validateStatus={fileErr ? 'error' : ''}
                        label='导入A类文件' {...commonFormProps}>{
                        getFieldDecorator('file', {
                            rules: [{
                                required: true,
                                message: '请选择文件导入'
                            }]
                        })(
                            <Upload {...this.uploadProps} fileList={fileList}>
                                <Button>
                                    <Icon type="upload"/>选择文件
                                </Button>
                            </Upload>
                        )
                    }</Form.Item>
                </Form>
            </Modal>
        )
    }
    createA = () => {
        let {getFieldsValue, getFieldsError} = this.props.form;
        let values = getFieldsValue();
        let {wf_id, title, file} = values;
        let canCreate = !hasErrors(getFieldsError());
        if(!file){
            alert('请选择上传文件')
        }else{
            if (canCreate) {
                request({
                    url: '/api/create_flow',
                    data: {
                        wf_id,
                        title,
                        file: file.file},
                    postType: 'formdata',
                    success: (res) => {
                        this.props.setVisible(false);
                        this.fetchFileAList();
                    },
                    fail: (res) => {
                        this.warning(res)
                        this.props.setVisible(false);
                    }
                })
            }
        }
    };
    warning = (res) => {
        Modal.warning({
            title:'警告',
            content: res.msg
        })
    };
    fetchFileAList = () => {
        request({
            url: '/api/get_flow_list',
            data: {
                keyword: ''
            },
            success: ({table}) => {
                store.setFileAList(table);
            }
        })
    };

}

export default Form.create()(CreateA);