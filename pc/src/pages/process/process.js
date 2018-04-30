import React from 'react';
import { Breadcrumb, Form, Select, Button, Table, Divider } from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import style from './process.css';
const Option = Select.Option;
import history from '../../history';
import EditB from '../edit_b/edit_b';
import CreateFileB from '../file_b/file_b';
import CreateFileC from '../file_c/file_c';
import CreateFileE from '../file_e/file_e';
import request from '../../helpers/request';
let file_type =['全部','A类文件','B类文件','C类文件','D类文件','E类文件'];
@observer
class Process extends React.Component{
  columns = [ {
    title: '文件类型',
    dataIndex: 'file_type',
      render: (text) => {
        return <span>{file_type[text]}</span>
      }
  }, {
    title: '效率100编号',
    dataIndex: 'wf_id'
  }, {
    title: '标题',
    dataIndex: 'title'
  }, {
    title: '文件名称',
    dataIndex: 'file_id'
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
    dataIndex: 'file_name'
  }, {
    title: '操作',
    render: (text,record) =>(<span>
         <a onClick={() => this.editItem(record)}>编辑</a>
        <Divider type='vertical'/>
        <a onClick={() => this.deleteItem(record)}>删除</a>
      </span>)
  }];
  render(){
      let {visible, list, process_list, selectedItem} = store;
      let { wf_ids, titles, creators } = list;
      // let dataSource = Array.from(process_list);
     let dataSource = process_list.slice();
      let { getFieldDecorator } = this.props.form;
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
          <EditB setVisible={this.setEditVisible} visible={visible} selectedItem={selectedItem}/>
          <CreateFileB />
        <CreateFileC />
        <CreateFileE />
      </div>
    )
  }
  componentDidMount(){
      this.fetchProcessList();
  }
    fetchProcessList = () => {
      request({
          url:'/api/get_file_list',
          data:{
              id:'',
              keyword:'',
              file_type:'',
          },
          success: ({data}) => {
              console.log(data);
              store.setProcessList(data);
          }
      })
    }
  goBack = (e) => {
    e.preventDefault();
    history.push('/batch_process');
  }
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
}
export default Form.create()(Process);