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
      // console.log(this.props);
      let { visible, setVisible } = this.props;
      let fileCVisible = visible.file_c;
      let Footer = () => (
      <footer style={{textAlign: 'right'}}>
        <Button type='primary'>执行比对</Button>
      </footer>
    );
      let ModalFooter = () => (
          <React.Fragment>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button type='primary' onClick={() => setVisible(false)}>确认</Button>
          </React.Fragment>
      );
    return (
      <Modal visible={fileCVisible} title='创建C类文件' width={800} footer={<ModalFooter/>} onCancel={setVisible(false)}>
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
  createC = () => {

  }
}
export default CreateFileC;