import React from 'react';
import { Form, Select, Button, Input, Table } from 'antd';
const Option = Select.Option;
import { observer } from 'mobx-react';
import store from './store';
import style from './batch_process.css';
import CreateA from '../create_a/create_a';
import EditA from '../edit_a/edit_a';
import request from '../../helpers/request';
import history from '../../history';
import exportFile from '../../helpers/export-file';
const Search = Input.Search;
@observer
class BatchProcess extends React.Component{
  columns = [{
    title: '编号',
    dataIndex: 'id'
  }, {
    title: '效率100编号',
    dataIndex: 'wf_id'
  }, {
    title: '标题',
    dataIndex: 'title'
  }, {
    title: '创建人',
    dataIndex: 'creator'
  }, {
    title: '创建时间',
    dataIndex: 'create_time'
  }, {
    title: '操作',
    render: (text, record) => (
      <span>
        <a className={style.operate} onClick={() => this.editItem(record)}>编辑</a>
        <a className={style.operate} onClick={() => this.deleteItem(record)}>删除</a>
        <a className={style.operate} onClick={() => this.goToDetail(record.id)}>查看详情</a>
      </span>
    )
  }];
  render(){
    let { visible, list, selectedItem, fileAList } = store;
    let dataSource = Array.from(fileAList);
    let { wf_ids, titles, creators } = list;
    let { getFieldDecorator } = this.props.form;
    let SelectBar = () => (
      <Form layout='inline'>
        <Form.Item label='效率100编号'>{
          getFieldDecorator('wf_id', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{wf_ids.map(id => (
              <Option key={id} value={id}>{id}</Option>
            ))}</Select>
          )
        }</Form.Item>
        <Form.Item label='标题'>{
          getFieldDecorator('title', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{titles.map(t => (
              <Option key={t} value={t}>{t}</Option>
            ))}</Select>
          )
        }</Form.Item>
        <Form.Item label='创建人'>{
          getFieldDecorator('creator', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{creators.map(c => (
              <Option key={c} value={c}>{c}</Option>
            ))}</Select>
          )
        }</Form.Item>
        <Form.Item>
          <Button type='primary'>查询</Button>
        </Form.Item>
        <Form.Item className={style.fr}>
          <Search placeholder='请输入其他关键字' enterButton/>
        </Form.Item>
      </Form>
    );
    return(
      <div className={'init-height'}>
        <SelectBar />
        <div className={style.action_bar}>
          <Button type='primary' onClick={this.createA}>创建任务</Button>
          {/*<Button onClick={this.exportFileA}>导出</Button>*/}
        </div>
        <Table columns={this.columns} dataSource={dataSource} rowKey='id'/>
        <CreateA setVisible={this.setCreateVisible} visible={visible}/>
        <EditA setVisible={this.setEditVisible} visible={visible} selectedItem={selectedItem}/>
      </div>
    )
  }
  componentDidMount(){
    this.fetchFileAList();
  }
  createA = () => {
    this.setCreateVisible(true);
  };
  fetchFileAList = () => {
    request({
      url: '/api/get_flow_list',
      data: {
        keyword: ''
      },
      success: ({data}) => {
        console.log(data);
        store.setFileAList(data);
      }
    })
  };
  setCreateVisible = (bool) => {
    store.setVisible({
      create: bool
    });
  };
  setEditVisible = (bool) => {
    store.setVisible({
      edit: bool
    });
  };
  editItem = (item) => {
    store.setSelectedItem(Object.assign({}, item, {
      editType: 'edit'
    }));
    store.setVisible({
      edit: true
    })
  };
  deleteItem = (item) => {
    store.setSelectedItem(Object.assign({}, item, {
      editType: 'delete'
    }));
    store.setVisible({
      edit: true
    })
  };
  goToDetail = (id) => {
    history.push(`/process/${id}`)
  };
  exportFileA = () => {
    // let
    // exportFile({
    //   url: '/api/get_file',
    //   data: data
    // })
  }
}
export default Form.create()(BatchProcess);