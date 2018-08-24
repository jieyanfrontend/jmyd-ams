import React, { Component } from 'react';
import moment from 'moment';
import style from './task.css';
import {Card, Form, Input, Select, Button, Table, Divider, Upload, notification, Modal, Spin, Icon} from 'antd';
import request from '../../helpers/request';
import exportFile from '../../helpers/export-file';

const { Option } = Select;
const { Search } = Input;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

let current_states = ['全部', '未预警', '已预警','超时 '];
let finish_states = ['全部', '未完成', '已完成'];
let follow_states = ['', '跟踪中', '暂停跟踪'];
class Task extends Component{
    state = {
        task_list: [],
        type_list: [],
        couldFollow: false,
        couldUnFollow: false,
        task_ids: '',
        current_state: 0,
        loading: false
    };
    totalData = [];
    columns = [{
        title: '编号',
        dataIndex: 'id'
    },{
        title: '任务名称',
        dataIndex: 'task_name'
    }, {
        title: '任务类型',
        dataIndex: 'task_type_name'
    }, {
        title: '完成时间',
        dataIndex: 'finish_time'
    }, {
        title: '当前状态',
        dataIndex: 'current_state',
        render:(text, record, index) => (<span>{current_states[text]}</span>)
    }, {
        title: '完成状态',
        dataIndex: 'finish_state',
        render: (text) => {
            return <span>{finish_states[text]}</span>
        }
    }, {
        title: '跟踪状态',
        dataIndex: 'follow_state',
        render:(text) => {
            return <span>{follow_states[text] || '无'}</span>
        }

    }, {
        title: '操作',
        render: (text, record) => record.finish_state === 2 ?
        (
            <span>
                <a onClick={() => this.handleDelete(record.id)}>删除</a>
            </span>
        ) : (
            <span>
                <a onClick={() => this.finishTask(record.id)}>完成</a>
                <Divider type="vertical" />
                <a onClick={() => this.handleDelete(record.id)}>删除</a>
            </span>
        )
    }];
    render(){
        const { getFieldDecorator } = this.props.form;
        let { task_list, type_list, couldFollow, couldUnFollow, task_ids, loading } = this.state;
        let rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = selectedRowKeys.join(',');
                if(!selectedRows.length){
                    this.setState({
                        couldUnFollow: false,
                        couldFollow: false,
                        task_ids: ''
                    })
                }else{
                    let follow = this.couldFollow(selectedRows);
                    let unfollow = this.couldUnFollow(selectedRows);
                    this.setState({
                        couldUnFollow: unfollow,
                        couldFollow: follow,
                        task_ids: ids
                    })
                }

            }
        };
        let uploadOptions = {
            name: 'file',
            action: '/api/import_task',
            withCredentials: true,
            customRequest: this.handleUpload,
            showUploadList: false
        };
        return (
            <div>
                <Card className={style.card} bordered={false} hoverable>
                    <Form layout="inline" className={style.search_form}>
                        <Form.Item label={'当前状态'}>
                            {getFieldDecorator('current_state', {
                                initialValue: 0
                            })(
                                <Select className={style.status_select}>
                                    <Option value={0}>全部</Option>
                                    <Option value={1}>未预警</Option>
                                    <Option value={2}>预警</Option>
                                    <Option value={3}>超时</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item
                            label={'完成状态'}
                        >
                            {getFieldDecorator('finish_state', {
                                initialValue: 0
                            })(
                                <Select className={style.status_select}>
                                    <Option value={0}>全部</Option>
                                    <Option value={1}>未完成</Option>
                                    <Option value={2}>已完成</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item
                            label={'任务类型'}
                        >
                            {getFieldDecorator('task_type_id', {
                                initialValue: 0
                            })(
                                <Select
                                    className={style.status_select}>
                                    <Option value={0}>全部</Option>
                                    {type_list.map(type => <Option key={type.task_type_id} value={type.task_type_id}>{type.task_type_name}</Option>)}
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                onClick={this.handleQuery}
                                type={'primary'}>查询</Button>
                        </Form.Item>
                        <Form.Item className={style.fr}>
                            {getFieldDecorator('keyword', {
                                initialValue: ''
                            })(
                                <Search
                                    placeholder={'请输入其他关键字'}
                                    enterButton
                                    onSearch={this.handleQuery}
                                />
                            )
                            }
                        </Form.Item>
                    </Form>
                    <div className={style.btn_group}>
                        <Upload { ...uploadOptions}>
                            <Button className={style.operate_btn} icon='upload' type='primary'>导入</Button>
                        </Upload>
                        <div>
                            <Button className={style.operate_btn} icon='download' onClick={() => this.exportTask()}>导出</Button>
                            {couldFollow ? <Button className={style.operate_btn} type={'warn'} onClick={this.followTask}>跟踪</Button> : null}
                            {couldUnFollow ? <Button className={style.operate_btn} onClick={this.unFollowTask}>暂停跟踪</Button> : null}
                            <Button className={style.operate_btn} onClick={() => this.handleDelete(task_ids)}>删除</Button>
                            <Button type='danger' onClick={() => this.deleteAll()}>清空库</Button>
                        </div>
                    </div>
                </Card>
                <Card className={style.card + ' ' + style.table } bordered={false}>
                    <Spin spinning={loading} tip='加载中...' indicator={antIcon}>
                        <Table pagination={{showSizeChanger: true, hideOnSinglePage: true, defaultPageSize: 20, pageSizeOptions: ['20', '50', '100', '200']}} rowSelection={rowSelection} columns={this.columns} dataSource={task_list} rowKey='id'/>
                    </Spin>
                </Card>
            </div>
        )
    }
    componentDidMount(){
        this.fetchTaskList();
        this.fetchTypeList();
    }
    componentWillMount(){
        clearInterval(this.timer);
    }
    //设置定时器；
    setTimer = ({loop = 10}) => {
        let that = this;
        this.timer = setInterval(() => {
            that.filterData(that.totalData);
        }, parseFloat(loop) * 60000);
    };
    //获取任务类型列表
    fetchTypeList = () => {
        request({
            url: '/api/get_config',
            success: (data) => {
                let { table, loop } = data;
                //获取到查询周期后，设置定时器
                this.setTimer({loop});
                this.setState({
                    type_list: table || []
                })
            }
        })
    };
    //获取任务列表
    fetchTaskList = () => {
        let that = this;
        this.setState({
            loading: true
        });
        request({
            url: '/api/get_task_list',
            data: {
                keyword: '',
                current_state: 0,
                finish_state: 0,
                task_type_id: 0
            },
            success: (data) => {
                let { table } = data;
                this.filterData(table);
                this.totalData = table;
                that.setState({
                    task_list: table
                })
            },
            complete: () => {
                this.setState({
                    loading: false
                })
            }
        })
    };
    filterData = (table) => {
        let time_warnCount = 0;
        let time_outCount = 0;
        let warn_ids = [],
            out_ids = [];
        table.forEach(t => {
            t.finish_state = t.finish_state || 1;
            if(t.finish_time){
                t.finish_time = moment(t.finish_time).format('YYYY-MM-DD HH:mm:ss');
                let nowTime = moment();
                if(t.finish_state === 1){
                    if(nowTime.isAfter(t.finish_time)){
                        if(t.current_state !== 3){
                            out_ids.push(t.id);
                        }
                        t.current_state = 3;
                        time_outCount++;
                    }else if(nowTime.isAfter(t.warn_time)){
                        if(t.current_state !== 2){
                            warn_ids.push(t.id);
                        }
                        t.current_state = 2;
                        time_warnCount++;
                    }else{
                        t.current_state = 1;
                    }
                }
            }

        });
        this.alarm({time_warnCount, time_outCount});
        if(!!warn_ids.length){
            this.changeTaskState({
                data: {
                    task_ids: warn_ids.join(','),
                    state: 2,
                    change_target: 'current_state'
                }
            });
        }
        if(!!out_ids.length){
            this.changeTaskState({
                data: {
                    task_ids: out_ids.join(','),
                    state: 3,
                    change_target: 'current_state'
                }
            })
        }
    };
    //任务提醒
    alarm = ({time_warnCount, time_outCount}) => {
        notification.close('alarm');
        notification.warn({
            message: '任务提醒',
            duration: null,
            key: 'alarm',
            description: <div>
                {time_warnCount ? <p>有{time_warnCount}个预警任务未完成</p> : null}
                {time_outCount ? <p>有{time_outCount}个超时任务未完成</p> : null}
            </div>
        })
    };
    //改变参数筛选数据
    queryData = (params) => {
        let { keyword, ...otherParams } = params;
        let queryParams = Object.keys(otherParams).filter(k => params[k] !== 0);
        let data = this.totalData;
        if(queryParams.length){
            data = this.totalData.filter(t => queryParams.every(q => t[q] === params[q]));
        }
        if(keyword){
            data = data.filter(t => Object.values(t).some(d => ('' + d).indexOf(keyword) !== -1));
        }
        this.setState({
            task_list: data
        });
    };
    //查询
    handleQuery = () => {
        let values = this.props.form.getFieldsValue();
        let { current_state, finish_state, task_type_id, keyword } = values;
        this.queryData({ current_state, finish_state, task_type_id, keyword });
    };
    //导入文件
    handleUpload = ({action, file, onSuccess, onError}) => {
        let that = this;
        request({
            url: action,
            postType: 'formdata',
            data: {
                file: file
            },
            success:() => {
                onSuccess();
                that.fetchTaskList();
                notification.success({
                    message: '导入成功'
                })
            },
            fail: (data) => {
                onError();
                notification.error({
                    message: '导入失败',
                    description: data.msg
                })
            }
        })
    };
    exportTask = () => {
        let values = this.props.form.getFieldsValue();
        let { current_state, finish_state, task_type_id, keyword } = values;
        exportFile({
            url: '/api/export_task',
            data: {
                current_state,
                finish_state,
                task_type_id,
                keyword
            }
        })
    };
    //删除
    handleDelete = (task_ids) => {
        let that = this;
        request({
            url: '/api/delete_task_list',
            data: {
                task_ids: task_ids
            },
            success: () => {
                notification.success({
                    message: "删除成功"
                });
                that.fetchTaskList();
            }
        })
    };
    couldFollow = (tasks) => {
        return !tasks.some((t) => t.follow_state === 1);
    };
    couldUnFollow = (tasks) => {
        return !tasks.some((t) => t.follow_state === 2);
    };
    //更改状态
    changeTaskState = ({data, success = () => {}, fail = () => {}}) => {
        request({
            url: "/api/change_state",
            data: data,
            success,
            fail
        })
    };
    //跟踪任务
    followTask = () => {
        let { task_ids } = this.state;
        this.changeTaskState({
            data: {
                change_target: 'follow_state',
                state: 1,
                task_ids
            },
            success: () => {
                notification.success({
                    message: '已为你跟踪所选任务'
                });
                this.fetchTaskList();
            }
        })
    };
    //暂停跟踪任务
    unFollowTask = () => {
        let { task_ids } = this.state;
        this.changeTaskState({
            data: {
                change_target: 'follow_state',
                state: 2,
                task_ids
            },
            success: () => {
                notification.success({
                    message: '已为你跟踪所选任务'
                });
                this.fetchTaskList();
            }
        })
    };
    //完成任务
    finishTask = (task_ids) => {
        this.changeTaskState({
            data: {
                change_target: 'finish_state',
                state: 2,
                task_ids
            },
            success: (data) => {
                notification.success({
                    message: '做好了!  '
                });
                this.fetchTaskList();
            }
        })
    };
    deleteAll = () => {
        Modal.confirm({
            title: '危险操作！你正在执行清空库操作',
            content: '将删除所有任务，请确保已经做好了备份工作！',
            okText: '确认',
            cancelText: '取消',
            onOk: () => this.handleDelete('-1')
        })
    }
}
const TaskForm = Form.create()(Task);
export default TaskForm;