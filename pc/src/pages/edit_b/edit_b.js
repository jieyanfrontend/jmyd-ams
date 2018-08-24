import React, { Component } from 'react';
import { Modal, Input, Button, Form, Icon } from 'antd';
import CommonModalConfig from '../../config/common-modal';
import CommonFormConfig from '../../config/common-form';
import request from '../../helpers/request';
import hasErrors from '../../helpers/has-errors';
import store from '../process/store';
import exportFile from "../../helpers/export-file";
import messageSuccess from '../../helpers/successMessage';
import style from './edit_b.css';
import ReactDom from 'react-dom';
class EditB extends Component {
  render() {
    let { selectedItem, visible, form } = this.props;
    let { isFieldTouched, getFieldError, getFieldsError, getFieldDecorator } = form;
    let editVisible = visible.edit;
    let { editType, wf_id, title, creator, create_time, file_type, remark, file_id, file_name,data_source } = selectedItem;
    let modalTitle = editType === 'edit' ? '编辑' : '删除';
    // let titleError = isFieldTouched('title') && getFieldError('title');
    // let wf_idError = isFieldTouched('wf_id') && getFieldError('wf_id');
    let remarkError = isFieldTouched('remark') && getFieldError('remark');
    let reasonError = isFieldTouched('reason') && getFieldError('reason');
    let isDisabledBtn = editType === 'edit' ? null : hasErrors(getFieldsError(['reason']));
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={this.closeModal}>取消</Button>
        <Button type="primary" disabled={isDisabledBtn} onClick={this.ensure}>
          确定
        </Button>
      </React.Fragment>
    );
    let file_type_list = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];
    return (
      <Modal
        visible={editVisible}
        title={`${modalTitle}----二级明细`}
        onCancel={this.closeModal}
        footer={<ModalFooter />}
        {...CommonModalConfig}
        destroyOnClose={true}
      >
        <Form>
          <Form.Item label="文件类型" {...CommonFormConfig}>
            {file_type_list[file_type]}
          </Form.Item>
          <Form.Item label="效率100编号" {...CommonFormConfig}>
            {wf_id}
          </Form.Item>
          <Form.Item label="标题" {...CommonFormConfig}>
            {title}
          </Form.Item>
          <Form.Item label="文件ID" {...CommonFormConfig}>
            {file_id}
          </Form.Item>
            <Form.Item label="数据来源" {...CommonFormConfig}>
            {data_source}
          </Form.Item>
          <Form.Item label="创建人" {...CommonFormConfig}>
            {creator}
          </Form.Item>
          <Form.Item label="创建时间" {...CommonFormConfig}>
            {create_time}
          </Form.Item>
          <Form.Item
            label="备注"
            help={remarkError ? remarkError : ''}
            validateStatus={remarkError ? 'error' : ''}
            {...CommonFormConfig}
          >
            {editType !== 'edit'
              ? remark
              : getFieldDecorator('remark', {
                  initialValue: remark,
                })(<Input />)}
                <span className={style.pl25}><a onClick={this.exportFileA}>{file_name}</a></span>
          </Form.Item>
          {editType === 'edit' ? null : (
            <Form.Item
              style={{ display: editType === 'edit' ? 'none' : 'block' }}
              help={reasonError ? reasonError : ''}
              validateStatus={reasonError ? 'reason' : ''}
              label="删除原因"
              {...CommonFormConfig}
            >
              {getFieldDecorator('reason', {
                rules: [
              {
                  require: true,
                  message: '请输入删除原因',
              },
                ],
              })(<Input placeholder="必填" />)}
            </Form.Item>
          )}
        </Form>
      </Modal>
    );
  }
  componentDidMount() {
    this.props.form.validateFields();
  }
  componentWillUnMount(){
    console.log('componentUnMount')
  }
  ensure = () => {
    let selectItem = this.props.selectedItem;
    let { getFieldsError } = this.props.form;
    let canPost = !hasErrors(getFieldsError);
    if (canPost) {
      if (selectItem.editType === 'edit') {
        this._edit();
      } else {
        this._delete();
      }
    }
  };
  _edit = () => {
    let { form } = this.props;
    let selectItem = this.props.selectedItem;
    let { file_id } = selectItem;
    let id = this.props.id;
    let { remark } = form.getFieldsValue();
    console.log(id);
    request({
      url: '/api/edit_file',
      data: {
        flow_id: id,
        file_id,
        remark: remark,
      },
      success: (res) => {
        this.closeModal();
        messageSuccess(res)
        this.fetchProcessList();
      },
      fail: (res) => {
        this.closeModal();
        // this.warning(res);
      },
    });
  };
  _delete = () => {
      let { form } = this.props;
      let selectItem = this.props.selectedItem;
      let { file_id } = selectItem;
      let id = this.props.id;
      let { reason } = form.getFieldsValue();
    request({
      url: '/api/delete_file',
      data: {
          flow_id: id,
          file_id,
         reason,
      },
      success: (res) => {
        this.closeModal();
        messageSuccess(res)
        this.fetchProcessList()
      },
      fail: (res) => {
        this.closeModal();
        // this.warning(res);
      },
    });
  };
    warning = (res) => {
        Modal.warning({
            title:'警告',
            content: res.msg
        })
    }
  closeModal = () => {
    let { setVisible } = this.props;
    setVisible(false);
      // ReactDom.unmountComponentAtNode(<Modal/>)
  };
  fetchProcessList = () => {
    request({
      url: '/api/get_file_list',
      data: {
        id: this.props.id,
        keyword: '',
        file_type: '',
      },
      success: ({ table }) => {
        store.setProcessList(table);
      },
    });
  };
    exportFileA = ()=>{
        let selectItem = this.props.selectedItem;
        let { file_id } = selectItem;
        let{id} = this.props;
        exportFile({
            url: '/api/get_file',
            data: {
                id:id,
                file_id,
            }
        })
    }
}
export default Form.create()(EditB);
