import React from 'react';
import {Form, Select, Button, Input, Table, Spin, Icon} from 'antd';
const Option = Select.Option;
import { observer } from 'mobx-react';
import store from './store';
import style from './batch_process.css';
import CreateA from '../create_a/create_a';
import EditA from '../edit_a/edit_a';
import request from '../../helpers/request';
import history from '../../history';
import exportFile from '../../helpers/export-file';
import {Modal} from "antd/lib/index";

const Search = Input.Search;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
@observer
class BatchProcess extends React.Component{
    state = {
      loading:false
    };
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
                <a className={style.operate} onClick={() => this.goToDetail(record.id,record.wf_id)}>查看详情</a>
            </span>
        )
    }];
    render(){
        let { visible, list, selectedItem, fileAList, loading,} = store;
        let dataSource = Array.from(fileAList);
        let { wf_ids, titles, creators } = list;
        let { getFieldDecorator } = this.props.form;
        let SelectBar = () => (
            <Form layout='inline'>
                <Form.Item className={style.fr}>
                    <Search placeholder='请输入关键字' onSearch={value => this.handQuery(value)} enterButton/>
                </Form.Item>
            </Form>
        );
        console.log(this.props);
        return(
            <div className={'init-height'}>
                <SelectBar />
                <div className={style.action_bar}>
                    <Button type='primary' onClick={this.createA}>创建任务</Button>
                </div>
                <Spin spinning={this.state.loading} tip='加载中...' indicator={antIcon}>
                    <Table pagination={{ showSizeChanger: true, hideOnSinglePage: false, defaultPageSize: 20, pageSizeOptions: ['20', '50', '100', '200'] }} columns={this.columns} dataSource={dataSource} rowKey='id'/>
                </Spin>
                <CreateA setVisible={this.setCreateVisible} visible={visible} selectedItem={selectedItem}/>
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
        this.setState({
            loading:true
        });
        request({
            url: '/api/get_flow_list',
            data: {
                keyword: ''
            },
            success: ({table}) => {
                store.setFileAList(table);
            },
            fail: (res) => {
                this.warning(res);
            },
            complete: () => {
                this.setState({
                    loading:false
                });
            }
        })
    };
    warning = (res) => {
        Modal.warning({
            title:'警告',
            content: res.msg
        })
    }
    handQuery = (val)=>{
        let {form} = this.props;
        let {getFieldsValue} = form;
        let values = getFieldsValue();
        let {keyword} = values;
        request({
            url: '/api/get_flow_list',
            data: {
                keyword: val,
            },
            success: ({table}) => {
                store.setFileAList(table);
            }
        })
    }
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
    goToDetail = (id,wf_id) => {
        history.push(`/process/${id}/${wf_id}`)
    };
    // exportFileA = () => {
    //     let values = this.props.form.getFieldsValue();
    //     console.log(values);
    //     // exportFile({
    //     //   url: '/api/get_file',
    //     //   data: data
    //     // })
    // }
}
export default Form.create()(BatchProcess);