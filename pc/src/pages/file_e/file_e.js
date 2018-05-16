import React, { Component } from 'react';
import { Modal, Form, Select, Upload, Button, Table, message } from 'antd';
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
    let { getFieldDecorator } = form;
    let { fileList } = this.state;
    let fileEVisible = visible.file_e;
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button type="primary" onClick={this.createE}>
          确认
        </Button>
      </React.Fragment>
    );
    return (
      <Modal
        title="创建E类文件"
        visible={fileEVisible}
        footer={<ModalFooter />}
        onCancel={() => setVisible(false)}
        width={800}
      >
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
              <Upload {...this.uploadProps2} fileList={fileList}>
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
        </Form>
      </Modal>
    );
  }
  createE = () => {
    let { id } = this.props;
    let { getFieldsValue, getFieldsError } = this.props.form;
    let canCreate = !hasErrors(getFieldsError());
    let values = getFieldsValue();
    let { file } = values;
    let { fileList } = file;
    let fileList1 = fileList[0];
    let fileList2 = values.file.fileList[1];
    // let name1 = fileList1.name;
    // let name2 = fileList2.name;
    // let validateName1;
    // let validateName2;
    // if (name1.indexOf('_normal') !== -1 || name1.indexOf('_error') !== -1) {
    //   return [[validateName1 = true]]
    // }
    // if (name2.indexOf('_normal') !== -1 || name2.indexOf('_error') !== -1) {
    //   return validateName2 = true;
    // }
      if (canCreate) {
          // if (validateName1 && validateName2) {
              // let formData = new FormData();
              // formData.append('file',fileList1);
              // formData.append('file',fileList2);
              // formData.append('id',id);
        request({
          url: '/api/create_file_e',
          data: {
            id,
            file: fileList,
          },
          postType: 'formdata',
          success: data => {
            this.props.setVisible(false);
            this.fetchProcessList();
          },
          fail: data => {
              message.error('请选择正确的文件');
              // console.log(data);
            this.props.store.setCreateVisible(false);
          },
        });
      }
    // }
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
}
export default Form.create()(CreateFileE);
