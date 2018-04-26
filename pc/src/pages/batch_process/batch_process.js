import React from 'react';
import { Form, Select, Button, Input, Table, Modal, Upload,Icon } from 'antd';
const Option = Select.Option;
import { observer } from 'mobx-react';
import store from './store';
import style from './batch_process.css';
const Search = Input.Search;
@observer
class CreateTask extends React.Component{
  formProps = {
    labelCol: {
      span: 6,
      gutter: 16
    },
    wrapperCol: {
      span: 16,
      gutter: 16
    }
  };
  uploadProps = {
    onChange: ({file}) => {
      let { task_params } = store;
      store.changeTaskParams({
        ...task_params,
        file
      })
    },
    beforeUpload: () => false,
    onRemove: () => {
      let { task_params } = store;
      store.changeTaskParams({
        ...task_params,
        file: null
      })
    }
  };
  render(){
    let { visible, task_params } = store;
    let { getFieldDecorator } = this.props.form;
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => store.setVisible(false)}>取消</Button>
        <Button type='primary'>确认</Button>
      </React.Fragment>
    );
    return (
      <Modal visible={visible} width={650} title='创建任务' footer={<ModalFooter/>} onCancel={() => store.setVisible(false)}>
        <Form>
          <Form.Item label='效率100编号' {...this.formProps}>{
            getFieldDecorator('code', {
              rules: [{
                required: true
              }]
            })(
              <Input/>
            )
          }</Form.Item>
          <Form.Item label='标题' {...this.formProps}> {
            getFieldDecorator('title', {
              rules: [{
                required: true
              }]
            })(
              <Input/>
            )
          }</Form.Item>
          <Form.Item label='导入A类文件' {...this.formProps}>{
            getFieldDecorator('file', {
              rules: [{
                required: true
              }]
            })(
              <Upload {...this.uploadProps} fileList={task_params.file ? [task_params.file] : []}>
                <Button>
                  <Icon type="upload" />选择文件
                </Button>
              </Upload>
            )
          }</Form.Item>
        </Form>
      </Modal>
    )
  }
}
let CreateTaskForm = Form.create()(CreateTask);
@observer
class BatchProcess extends React.Component{
  columns = [{
    title: '编号',
    dataIndex: 'code'
  }, {
    title: '效率100编号',
    dataIndex: 'efficient'
  }, {
    title: '标题',
    dataIndex: 'title'
  }, {
    title: '创建人',
    dataIndex: 'user'
  }, {
    title: '创建时间',
    dataIndex: 'create_time'
  }, {
    title: '操作',
    render: () => (
      <span>
        <a className={style.operate}>编辑</a>
        <a className={style.operate}>删除</a>
        <a className={style.operate}>查看详情</a>
      </span>
    )
  }];
  render(){
    let { efficientCode, titles, taskList } = store;
    let dataSource = taskList.slice();
    let { getFieldDecorator } = this.props.form;
    let SelectBar = () => (
      <Form layout='inline'>
        <Form.Item label='效率100编号'>{
          getFieldDecorator('efficient', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{efficientCode.map(c => (
              <Option key={c.title} value={c.title}>{c.title}</Option>
            ))}</Select>
          )
        }</Form.Item>
        <Form.Item label='标题'>{
          getFieldDecorator('title', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{titles.map(t => (
              <Option key={t.title}>{t.title}</Option>
            ))}</Select>
          )
        }</Form.Item>
        <Form.Item label='创建人'>{
          getFieldDecorator('user', {
            initialValue: '0'
          })(
            <Select className={style.select}>
              <Option value='0'>全部</Option>{titles.map(t => (
              <Option key={t.title}>{t.title}</Option>
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
          <Button type='primary' onClick={this.addTask}>创建任务</Button>
          <Button>导出</Button>
        </div>
        <Table columns={this.columns} dataSource={dataSource}/>
        <CreateTaskForm/>
      </div>
    )
  }
  addTask = () => {
    store.setVisible(true);
  }
}
export default Form.create()(BatchProcess);