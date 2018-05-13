import React, {Component} from 'react';
import { Modal, Form, Select, Upload, Button, Table } from 'antd';
let Option = Select.Option;
let formProps = {
  labelCol: {
    span: 4,
    gutter: 16
  },
  wrapperCol: {
    span: 18,
    gutter: 16
  }
};
let standards = {
  input: {
    dataSource: [{
      phone: '1234567890',
      code: '-',
      operate_time: '-',
      result: 'SUCCESS',
      error: '无'
    }, {
      phone: '1234567890',
      code: '-',
      operate_time: '-',
      result: '-',
      error: '不符合条件'
    }],
    columns: [{
      title: '号码',
      dataIndex: 'phone'
    }, {
      title: '营销方案编码',
      dataIndex: 'code'
    }, {
      title: '操作时间',
      dataIndex: 'operate_time'
    }, {
      title: '结果',
      dataIndex: 'result'
    }, {
      title: '失败原因',
      dataIndex: 'error'
    }]
  },
  output: {
    dataSource: [{
      order: 1,
      phone: 1234567890,
      code: '',
      operate_time: '',
      result: '成功',
      error: '无'
    }, {
      order: 2,
      phone: 1234567890,
      code: '',
      operate_time: '',
      result: '失败',
      error: '不符合条件'
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '号码',
      dataIndex: 'phone',
    }, {
      title: '营销方案编码',
      dataIndex: 'code'
    }, {
      title: '操作时间',
      dataIndex: 'operate_time'
    }, {
      title: '结果',
      dataIndex: 'result'
    }, {
      title: '失败原因',
      dataIndex: 'error'
    }]
  }
};
let tableProps = {
  size: 'small',
  pagination: false
}
class CreateFileE extends Component{
  render(){
    let { visible, setVisible } = this.props;
    let fileEVisible = visible.file_e;
      let ModalFooter = () => (
          <React.Fragment>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button type='primary' onClick={() => setVisible(false)}>确认</Button>
          </React.Fragment>
      );
    return (
      <Modal title='创建E类文件' visible={fileEVisible} footer={<ModalFooter/>} width={800}>
        <Form>
          <Form.Item label='文件类型' {...formProps}>
            <Select defaultValue='D类文件'>
              <Option value='D类文件'>D类文件</Option>
            </Select>
          </Form.Item>
          <Form.Item label={<span></span>} colon={false} {...formProps}>
            <Upload>
              <Button>导入文件</Button>
            </Upload>
          </Form.Item>
          <Form.Item label='输入格式' {...formProps}>
            <Table {...standards.input}{...tableProps}/>
          </Form.Item>
          <Form.Item label='输出格式' {...formProps}>
            <Table {...standards.output} {...tableProps}/>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
export default CreateFileE;