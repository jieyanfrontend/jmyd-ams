import React from 'react';
import { Breadcrumb, Form, Select, Button, Table, Input } from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import style from './process.css';
const Option = Select.Option;
import history from '../../history';
import CreateFileB from '../file_b/file_b';
import CreateFileC from '../file_c/file_c';
import CreateFileE from '../file_e/file_e';
import request from "../../helpers/request";
import exportFile from '../../helpers/export-file';
let Search = Input.Search;
@observer
class Process extends React.Component{
  columns = [{
    title: '序号',
    dataIndex: 'id'
  }, {
    title: '文件类型',
    dataIndex: 'file_type',
    render: type => <span>{type}</span>
  }, {
    title: '效率100编号',
    dataIndex: 'wf_id'
  }, {
    title: '标题',
    dataIndex: 'title'
  }, {
    title: '文件名称',
    dataIndex: 'file_name'
  }, {
    title: '创建人',
    dataIndex: 'creator'
  }, {
    title: '创建时间',
    dataIndex: 'create_time'
  }, {
    title: '备注',
    dataIndex: 'remark'
  }, {
    title: '打开附件',
    dataIndex: 'file_name',
    render: (file) => <a onClick={() => this.download(file)}>{file}</a>
  }, {
    title: '操作',
    dataIndex: 'operate',
    render: () => (
      <React.Fragment>
        <a className='mr15'>编辑</a>
        <a>删除</a>
      </React.Fragment>
    )
  }];
  render(){
    let { getFieldDecorator } = this.props.form;
    let { process_list, file_types, file_type } = store;
    let dataSource = Array.from(process_list);
    let fileTypes = Array.from(file_types);
    let SelectBar = () => (
      <Form layout='inline' className={style.form}>
        <Form.Item label='文件类型'>
          <Select className={style.select} value={file_type} onChange={this.changeFileType}>
            <Option value='0'>全部</Option>{fileTypes.map(type => (
            <Option value={type.type} key={type}>{type.name}</Option>
            ))}
          </Select>
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
        <div className='fr'>
          <Search placeholder='请输入其他关键字' enterButton  />
        </div>
        <SelectBar />
        <Table dataSource={dataSource} columns={this.columns} rowKey='file_name'/>
        <CreateFileB />
        <CreateFileC />
        <CreateFileE />
      </div>
    )
  }
  componentDidMount(){
    this.fetchList();
  }
  fetchList = () => {
    let { match } = this.props;
    let { file_type, keyword } = store;
    request({
      url: '/api/get_file_list',
      data: {
        file_type,
        keyword,
        id: match.params.id
      },
      success: ({ data }) => {
        data.forEach(d => d.id = match.params.id);
        store.setProcessList(data);
      }
    })
  };
  changeFileType = (value) => {
    store.setFileType(value);
    this.fetchList()
  };
  download = (file) =>{
    exportFile({
      url: ''
    })
  };
  goBack = (e) => {
    e.preventDefault();
    history.push('/batch_process');
  }
}
export default Form.create()(Process);