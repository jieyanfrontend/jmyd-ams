import React from 'react';
import {Breadcrumb, Form, Select, Button, Table, Divider, notification, Icon,Spin} from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import style from './process.css';
const Option = Select.Option;
import history from '../../history';
import EditB from '../edit_b/edit_b';
import CreateFileB from '../file_b/file_b';
import CreateFileBCheck from '../file_b_check/file_b_check';
import CreateFileC from '../file_c/file_c';
import CreateFileE from '../file_e/file_e';
import PartitionFileB from '../partition_fileb/partition_fileb'
import request from '../../helpers/request';
import exportFile from '../../helpers/export-file';
import {Modal} from "antd/lib/index";
let file_type =['全部','A类文件','B类文件','C类文件','D类文件','E类文件'];
let file_type_num =[1,2,3,4,5];

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@observer
class Process extends React.Component{
    state = {
      myCKey: Math.random(),
      myEKey: Math.random(),
        loading:false
    };
    fileCreateType = {
        B:true,
        C:true,
        E:true,
    };
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
        title: '文件ID',
        dataIndex: 'file_id'
    }, {
        title:'数据来源',
        dataIndex:'data_source'
    }
    ,  {
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
        let {visible, list, process_list, selectedItem, loading} = store;
        let { file_types } = list;
        let dataSource = process_list.slice();
        let { getFieldDecorator } = this.props.form;
        let { match } = this.props;
        console.log(match);
        let bool = match && match.params.id && match.params.wf_id;
        if(!bool)return null;
        let SelectBar = () => (
            <Form layout='inline' className={style.form}>
                <Form.Item label='文件类型'>
                    {getFieldDecorator('type', {
                        initialValue: '0'
                    })(
                        <Select className={style.select}>
                            <Option value='0'>全部</Option>{file_type_num.map(b => (
                            <Option value={b} key={b}>{file_type[b]}</Option>
                        ))}
                        </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} onClick={() => this.handleQuery()}>查询</Button>
                </Form.Item>
     {/*           <Form.Item>
                    <Button type={'primary'} onClick={() => this.test()}>test</Button>
                </Form.Item>*/}
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileBItem()}>创建B类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileBCheckItem()}>创建B类比对文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileCItem()}>创建C类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileEItem()}>创建E类文件</Button>
                </Form.Item>
                <Form.Item className='fr'>
                    {/*<Button className='mr15'>分出</Button>*/}
                    {/*<Button className='mr15'>导入</Button>*/}
                    <Button onClick={() => this.patitionFileB()}>分割</Button>
                </Form.Item>
            </Form>
        );
        return (
            <div className={'init-height'}>
                <a onClick={this.goBack}>
                    {/*<Breadcrumb.Item>返回</Breadcrumb.Item>*/}
                    <Button type="primary">返回</Button>
                </a>
                <SelectBar />
                <Spin spinning={this.state.loading} tip='加载中...' indicator={antIcon}>
                    <Table pagination={{ showSizeChanger: true, hideOnSinglePage: false, defaultPageSize: 20, pageSizeOptions: ['20', '50', '100', '200'] }} dataSource={dataSource} columns={this.columns} rowKey='file_id'/>
                </Spin>
                <EditB setVisible={this.setEditVisible} visible={visible} selectedItem={selectedItem} id={this.props.match.params.id}/>
                <PartitionFileB setVisible={this.setPartitionVisible} visible={visible} dataSource={dataSource} wf_id={this.props.match.params.wf_id} id={this.props.match.params.id}/>
                <CreateFileB setVisible={this.setFileBVisible} visible={visible} wf_id={this.props.match.params.wf_id} id={this.props.match.params.id} dataSource={dataSource}/>
                <CreateFileBCheck setVisible={this.setFileBCheckVisible} visible={visible} wf_id={this.props.match.params.wf_id} id={this.props.match.params.id} dataSource={dataSource}/>
                <CreateFileC setVisible={this.setFileCVisible} visible={visible} dataSource={dataSource} wf_id={this.props.match.params.wf_id} id={this.props.match.params.id}/>
                <CreateFileE setVisible={this.setFileEVisible} visible={visible} dataSource={dataSource} id={this.props.match.params.id}/>
            </div>
        )
    }
    componentDidMount(){
        this.fetchProcessList();
        // console.log(this.props);
    };
    test = () => {
        console.log(this.canCreateFile(2));
        console.log(this.canCreateFile(3));
        console.log(this.canCreateFile(5));
    };
    canCreateFile = (num) => {
        let { file_types } = store.list;
        return file_types.indexOf(num) !== -1;
    };
    canCreateFileB = () => {
        let {process_list} = store;
        let canCreateFile = true;
        process_list.forEach(v => {
            if(v.file_name.indexOf("B类对比文件") !== -1){
                return canCreateFile = false;
        }
        if(!canCreateFile){
            this.openModalAutoDestroy()
        }
    })
    };
    openModalAutoDestroy = () => {
        const modal = Modal.warning({
            title:'操作提示',
            content:'已存在该类文件，请确认无误后操作',
            zIndex:1001
        });
    }
    fetchProcessList = () => {
        this.setState({
            loading:true
        });
        request({
            url:'/api/get_file_list',
            data:{
                id:this.props.match.params.id,
                keyword:'',
                file_type:'',
            },
            success: ({table}) => {
                store.setProcessList(table);
            },
            fail: (res) => {
                this.warning(res);
            },
            complete: () => {
                this.setState({
                    loading:false
                })
            }
        })
    };
    warning=  (res) => {
        Modal.warning({
            title:'警告',
            content: res.msg
        })
    };

    goBack = (e) => {
        e.preventDefault();
        history.push('/batch_process');
    };
    setEditVisible = (bool) => {
        store.setVisible({
            edit: bool
        });
    };
    setPartitionVisible = (bool) =>{
        store.setVisible({
            partition: bool
        })
    };
    setFileBVisible = (bool) =>{
        store.setVisible({
            file_b: bool
        })
    };
    setFileBCheckVisible = (bool) =>{
        store.setVisible({
            file_b_check: bool
        });

    };
    setFileCVisible = (bool) =>{
        store.setVisible({
            file_c: bool
        });

    };
    setFileEVisible = (bool) =>{
        store.setVisible({
            file_e: bool})
    };
    patitionFileB = () =>{
        store.setVisible({
            partition:true
        })
    };
    fileBItem = () => {
        if (this.canCreateFile(2)) {
            this.openModalAutoDestroy()
        }
        store.setVisible({
            file_b: true
        })
    };
    fileBCheckItem = () => {
        let {process_list} = store;
        let canCreateFile = true;
        process_list.forEach(v => {
            if(v.file_name.indexOf("B类对比文件") !== -1){
                return canCreateFile = false;
            }
            });
        if(!canCreateFile){
            this.openModalAutoDestroy()
        }
        store.setVisible({
            file_b_check:true
        })
    };
    fileCItem = () => {
        if (this.canCreateFile(3)) {
            this.openModalAutoDestroy()
        }
        store.setVisible({
            file_c: true
        })
    };
    fileEItem = () => {
        if (this.canCreateFile(5)) {
            this.openModalAutoDestroy()
        }
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
    handleQuery = ()=>{
        let { form } = this.props;
        let { getFieldsValue } = form;
        let values = getFieldsValue();
        console.log(values);
        let file_type = values.type;
        request({
            url: '/api/get_file_list',
            data:{
                id:this.props.match.params.id,
                file_type: file_type,
                keyword: ''
            } ,
            success: ({table}) => {
                store.setProcessList(table);
            }
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
    /*openNotification = () => {
    notification['warning']({
        message:'操作提示',
        description:'已存在该类文件，请确认无误后操作'
    })
}*/
}
export default Form.create()(Process);