import React from 'react';
import { Breadcrumb, Form, Select, Button, Table } from 'antd';
import store from './store';
import style from './process.css';
const Option = Select.Option;
import history from '../../history';
import CreateFileB from '../file_b/file_b';
import CreateFileC from '../file_c/file_c';
import CreateFileE from '../file_e/file_e';
class Process extends React.Component{
  columns = [{
    title: '序号',
    dataIndex: 'order_number'
  }, {
    title: '文件类型',
    dataIndex: 'type'
  }, {
    title: '效率100编号',
    dataIndex: 'efficiency'
  }, {
    title: '标题',
    dataIndex: 'title'
  }, {
    title: '文件名称',
    dataIndex: 'name'
  }, {
    title: '创建人',
    dataIndex: 'user'
  }, {
    title: '创建时间',
    dataIndex: 'create_time'
  }, {
    title: '备注',
    dataIndex: 'remark'
  }, {
    title: '打开附件',
    dataIndex: 'attachment'
  }, {
    title: '操作',
    dataIndex: 'operate'
  }];
  render(){
    let { getFieldDecorator } = this.props.form;
    let { process_list } = store;
    let dataSource = process_list.slice();
    let SelectBar = () => (
      <Form layout='inline' className={style.form}>
        <Form.Item label='文件类型'>
          {getFieldDecorator('type', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type='primary'>创建B类文件</Button>
       </Form.Item>
        <Form.Item>
          <Button type='primary'>创建C类文件</Button>
        </Form.Item>
        <Form.Item>
          <Button type='primary'>创建E类文件</Button>
        </Form.Item>
        <Form.Item className='fr'>
          <Button className='mr15'>分割</Button>
          <Button>导入</Button>
        </Form.Item>
      </Form>
    );
    return (
      <div className={'init-height'}>
        <a onClick={this.goBack}>
          <Breadcrumb.Item>返回</Breadcrumb.Item>
        </a>
        <SelectBar />
        <Table dataSource={dataSource} columns={this.columns}/>
        <CreateFileB />
        <CreateFileC />
        <CreateFileE />
      </div>
    )
  }
  goBack = (e) => {
    e.preventDefault();
    history.push('/batch_process');
  }
}
export default Form.create()(Process);