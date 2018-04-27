import React, { Component } from 'react';
import { Modal, Table, Checkbox, Button, List } from 'antd';
class CreateFileC extends Component{
  columns = [{
    title: '编号',
    dataIndex: 'number'
  }, {
    title: '创建人',
    dataIndex: 'user'
  }, {
    title: '创建时间',
    dataIndex: 'create_time'
  }, {
    title: '文件类型',
    dataIndex: 'file_type'
  }, {
    title: '打开附件',
    dataIndex: 'attachment'
  }, {
    title: '选择比对',
    dataIndex: '',
    render: () => <Checkbox />
  }];
  render(){
    let Footer = () => (
      <footer style={{textAlign: 'right'}}>
        <Button type='primary'>执行比对</Button>
      </footer>
    );
    let { visible } = this.props;
    return (
      <Modal visible={visible} title='创建C类文件' width={800}>
        <Table title={() => <span>hello world</span>} dataSource={[]} columns={this.columns}  size='small' bordered={false} footer={Footer}/>
        <List size='small'
              header={<div>比对结果</div>}
              bordered={false}
              locale={{emptyText: ''}}
              dataSource={[]}
              renderItem={item => <List.Item>{item}</List.Item>}/>
      </Modal>
    )
  }
}
export default CreateFileC;