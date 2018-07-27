import React, { Component } from 'react';
import { Modal, Form, Select, Upload, Button, Table, message, Input, DatePicker, Spin } from 'antd';
import request from '../../helpers/request';
import hasErrors from '../../helpers/has-errors';
import store from '../process/store';
let Option = Select.Option;
let formProps = {
  labelCol: {
    span: 4,
    gutter: 16,
  },
  wrapperCol: {
    span: 18,
    gutter: 16,
  },
};
let standards = {
  input: {
    dataSource: [
      {
        phone: '1234567890',
        code: '-',
        operate_time: '-',
        result: 'SUCCESS',
        error: '无',
      },
      {
        phone: '1234567890',
        code: '-',
        operate_time: '-',
        result: '-',
        error: '不符合条件',
      },
    ],
    columns: [
      {
        title: '号码',
        dataIndex: 'phone',
      },
      {
        title: '营销方案编码',
        dataIndex: 'code',
      },
      {
        title: '操作时间',
        dataIndex: 'operate_time',
      },
      {
        title: '结果',
        dataIndex: 'result',
      },
      {
        title: '失败原因',
        dataIndex: 'error',
      },
    ],
  },
  output: {
    dataSource: [
      {
        order: 1,
        phone: 1234567890,
        code: '',
        operate_time: '',
        result: '成功',
        error: '无',
      },
      {
        order: 2,
        phone: 1234567890,
        code: '',
        operate_time: '',
        result: '失败',
        error: '不符合条件',
      },
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
      },
      {
        title: '号码',
        dataIndex: 'phone',
      },
      {
        title: '营销方案编码',
        dataIndex: 'code',
      },
      {
        title: '操作时间',
        dataIndex: 'operate_time',
      },
      {
        title: '结果',
        dataIndex: 'result',
      },
      {
        title: '失败原因',
        dataIndex: 'error',
      },
    ],
  },
};
let tableProps = {
  size: 'small',
  pagination: false,
};
class CreateFileE extends Component {
  state = {
    fileList: [],
  };
  uploadProps2 = {
    onChange: ({ fileList }) => {
      this.setState({
        fileList,
      });
    },
    beforeUpload: () => false,
    onRemove: () => {
      this.props.form.setFieldsValue({
        file: null,
      });
      this.setState(
        {
          fileList: [],
        },
        () => {
          this.props.form.validateFields();
        }
      );
    },
  };
  render() {
    let { visible, setVisible, form } = this.props;
    let { getFieldDecorator, getFieldValue } = form;
    let { fileList } = this.state;
    let fileEVisible = visible.file_e;
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button type="primary" disabled={isDisabledBtn()} onClick={this.createE}>
          确认
        </Button>
      </React.Fragment>
    );
      let isDisabledBtn = () => {
          if(!getFieldValue('operation_time')){
              return true
          }
          return false
      }
    return (
      <Modal
        title="创建E类文件"
        visible={fileEVisible}
        footer={<ModalFooter />}
        onCancel={() => setVisible(false)}
        width={800}
      >
          <Spin spinning={store.loading}>
        <Form>
          <Form.Item label="文件类型" {...formProps}>
            <Select defaultValue="D类文件">
              <Option value="D类文件">D类文件</Option>
            </Select>
          </Form.Item>
          <Form.Item label={<span />} colon={false} {...formProps}>
            {getFieldDecorator('file', {
              rules: [
                {
                  required: true,
                  message: '请选择文件导入',
                },
              ],
            })(
              <Upload {...this.uploadProps2} fileList={fileList} multiple={true}>
                <Button>选择文件</Button>
              </Upload>
            )}
          </Form.Item>
          <Form.Item label="输入格式" {...formProps}>
            <Table rowKey="result" {...standards.input} {...tableProps} />
          </Form.Item>
          <Form.Item label="输出格式" {...formProps}>
            <Table rowKey="result" {...standards.output} {...tableProps} />
          </Form.Item>
          <Form.Item label="创建时间" {...formProps}>
            {getFieldDecorator('operation_time', {
              rules: [
                {
                  required: true,
                  message: '请输入创建时间',
                },
              ],
            })(<DatePicker />)}
          </Form.Item>
        </Form>
          </Spin>
      </Modal>
    );
  }
  createE = () => {
    let { id } = this.props;
    let { getFieldsValue, getFieldsError } = this.props.form;
    let canCreate = !hasErrors(getFieldsError());
    let values = getFieldsValue();
    let { file, operation_time } = values;
    let { fileList } = file;
    operation_time = operation_time.format('YYYYMMDD');
    console.log(operation_time);
    if (canCreate) {
      // if (validateName1 && validateName2) {
      // let formData = new FormData();
      // formData.append('file',fileList1);
      // formData.append('file',fileList2);
      // formData.append('id',id);
        store.setLoading(true)
      request({
        url: '/api/create_file_e',
        data: {
          id,
          operation_time,
          file: fileList,
        },
        postType: 'formdata',
        success: data => {
          this.props.setVisible(false);
          this.fetchProcessList();
        },
        fail: data => {
          message.error('请选择正确的文件');
          this.props.store.setCreateVisible(false);
        },
        complete: () => {
              store.setLoading(false)
          }
      });
    }
    // }
  };
  fetchProcessList = () => {
      store.setLoading(true)
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
      complete: () => {
            store.setLoading(false)
        }
    });
  };
}
export default Form.create()(CreateFileE);
