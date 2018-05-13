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
import exportFile from '../../helpers/export-file';
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
        dataIndex: 'file_name',
        render:(text,record) => (
            <span>
                <a onClick={() => this.exportFileA(record.file_id)}>{text}</a></span>
        )
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
        let { file_types } = list;
        // console.log(process_list);
        // let dataSource = Array.from(process_list);
        let dataSource = process_list.slice();
        let { getFieldDecorator } = this.props.form;
        let { match } = this.props;
        let bool = match && match.params.id && match.params.wf_id;
        if(!bool)return null;
        let SelectBar = () => (
            <Form layout='inline' className={style.form}>
                <Form.Item label='文件类型'>
                    {getFieldDecorator('type', {
                        initialValue: '0'
                    })(
                        <Select className={style.select}>
                            <Option value='0'>全部</Option>{file_types.map(b => (
                            <Option value={b} key={b}>{file_type[b]}</Option>
                        ))}
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileBItem()}>创建B类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileCItem()}>创建C类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileEItem()}>创建E类文件</Button>
                </Form.Item>
                <Form.Item className='fr'>
                    <Button className='mr15'>分割</Button>
                    <Button className='mr15'>导入</Button>
                    <Button>导出</Button>
                </Form.Item>
            </Form>
        );
        return (
            <div className={'init-height'}>
                <a onClick={this.goBack}>
                    <Breadcrumb.Item>返回</Breadcrumb.Item>
                </a>
                <SelectBar />
                <Table dataSource={dataSource} columns={this.columns} rowKey='file_name'/>
                <EditB setVisible={this.setEditVisible} visible={visible} selectedItem={selectedItem}/>
                <CreateFileB setVisible={this.setFileBVisible} visible={visible} wf_id={this.props.match.params.wf_id} id={this.props.match.params.id}/>
                <CreateFileC setVisible={this.setFileCVisible} visible={visible}/>
                <CreateFileE setVisible={this.setFileEVisible} visible={visible}/>
            </div>
        )
    }
    componentDidMount(){
        this.fetchProcessList();
        // console.log(this.props);
    }
    fetchProcessList = () => {
        request({
            url:'/api/get_file_list',
            data:{
                id:this.props.match.params.id,
                keyword:'',
                file_type:'',
            },
            success: ({table}) => {
                console.log(table);
                store.setProcessList(table);
            }
        })
    }
    goBack = (e) => {
        e.preventDefault();
        history.push('/batch_process');
    };
    setEditVisible = (bool) => {
        store.setVisible({
            edit: bool
        });
    };
    setFileBVisible = (bool) =>{
        store.setVisible({
            file_b: bool
        })
    };
    setFileCVisible = (bool) =>{
        store.setVisible({
            file_c: bool
        })
    };;
    setFileEVisible = (bool) =>{
        store.setVisible({
            file_e: bool
        })
    };
    fileBItem = () => {
        store.setVisible({
            file_b: true
        })
    };
    fileCItem = () => {
        store.setVisible({
            file_c: true
        })
    };
    fileEItem = () => {
        store.setVisible({
            file_e: true
        })
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
    exportFileA = (file_id)=>{
        let{match} = this.props;
        let {params} = match;
        let {id} = params;
            exportFile({
              url: '/api/get_file',
              data: {
                  id:id,
                  file_id:file_id,
              }
            })
    }
}
export default Form.create()(Process);