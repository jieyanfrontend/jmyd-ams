import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Input,Row,Col, Button, Table, notification, Modal  } from 'antd';
import style from './setting.css';
import request from '../../helpers/request';
import UpdateModal from '../../components/update-modal';
class Setting extends React.Component{
    state = {
        taskTypeList: [],
        loop: '',
        addTypeErr: false,
        updating: false,
        updateType: {}
    };
    columns = [{
        title: '任务类型',
        dataIndex: 'task_type_name'
    },{
        title: '预警时间',
        dataIndex: 'time_warn',
        render: (time) => <span>提前{time}小时</span>
    }, {
        title: '超时时间',
        dataIndex: 'time_out',
        render: (time) => <span>提前{time}小时</span>
    }, {
        title: '操作',
        dataIndex: 'task_type_id',
        render: (id, record) => <span>
            <a onClick={() => this.updateING(record)} style={{marginRight: '8px'}}>修改</a>
            <a onClick={() => this.deleteType(id)}>删除</a>
        </span>
    }];
    render(){
        const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form;
        const  { taskTypeList, loop, addTypeErr, updating , updateType} = this.state;
        const typeNameErr = isFieldTouched('task_type_name') && getFieldError('task_type_name') || addTypeErr;
        const timeWarnErr = isFieldTouched('time_warn') && getFieldError('time_warn');
        const timeOutErr = isFieldTouched('time_out') && getFieldError('time_out');
        const loopErr = isFieldTouched('loop') && getFieldError('loop');
        return (
            <div>
                <UpdateModal visible={updating} type={updateType} ensure={(value) => this.updateType(value)} close={() => this.closeModal()}/>
                <Card title={'任务设置'} className={style.card} bordered={false}>
                    <Form
                        onSubmit={this.handleAddTaskType}
                        layout="inline" className={style.search_form}>
                        <Row gutter={24}>
                            <Col span={7}>
                                <Form.Item
                                    validateStatus={typeNameErr ? 'error' : ''} help={typeNameErr || ''}
                                    label='任务类型' className={style.form_item}>
                                    {getFieldDecorator('task_type_name', {
                                        rules: [{
                                            required: true,
                                            message: '请输入任务类型名称'
                                        }]
                                    })(
                                        <Input onChange={() => this.handleChange()}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={7}>
                                <Form.Item
                                    validateStatus={timeWarnErr ? 'error' : ''} help={timeWarnErr || ''}
                                    label='预警时间' className={style.form_item}>
                                    {getFieldDecorator('time_warn', {
                                        rules: [{
                                            required: true,
                                            message: '请输入预警时间'
                                        }]
                                    })(
                                        <Input addonAfter={'小时 '}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={7}>
                                <Form.Item
                                    validateStatus={timeOutErr ? 'error' : ''} help={timeOutErr || ''}
                                    label='超时时间' className={style.form_item}>
                                    {getFieldDecorator('time_out', {
                                        rules: [{
                                            required: true,
                                            message: '请输入超时时间'
                                        }]
                                    })(
                                        <Input addonAfter={'小时'}/>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item>
                                    <Button
                                        disabled={this.hasErrors(getFieldsError(['task_type_name','time_warn', 'time_out']))}
                                        type="primary" icon={'plus'} htmlType="submit">新增</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
                <Card className={style.card } bordered={false}>
                    <Table columns={this.columns} dataSource={taskTypeList} rowKey='task_type_id' pagination={false}/>
                </Card>
                <Card title={'系统设置'} className={style.card} bordered={false}>
                    <Form
                        name='form2'
                        onSubmit={this.handleSetLoop}
                        layout="inline" className={style.search_form}>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item
                                    validateStatus={loopErr ? 'error' : ''} help={loopErr || ''}
                                    label='查询周期' className={style.form_item}>
                                    {getFieldDecorator('loop', {
                                        initialValue: loop,
                                        rules: [{
                                            required: true,
                                            message: '请输入查询周期'
                                        },{
                                            validator: (rule, value, cb) => parseFloat(value) === parseFloat(loop) ? cb('请输入一个新的查询周期') : cb(),
                                            pattern: /^[1-9]\d*$/
                                        }],
                                    })(
                                        <Input
                                            autoComplete={'off'}
                                            addonAfter={'分钟'} />
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item className={style.system_btn_group}>
                            <Link to='/'>
                                <Button type="default" style={{marginRight: '16px'}}>返回</Button>
                            </Link>
                            <Button
                                disabled={!isFieldTouched('loop') || this.hasErrors(getFieldsError(['loop']))}
                                type="primary" htmlType="submit">保存</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
    componentDidMount(){
        this.props.form.validateFields();
        this.fetchTaskTypeList();
    }
    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };
    fetchTaskTypeList = () => {
        request({
            url: '/api/get_config',
            data: {},
            success: (data) => {
                const { table, loop } = data;
                this.props.form.setFields({
                    loop: {
                        value: loop
                    }
                });
                this.setState({
                    taskTypeList: table || [],
                    loop
                })
            }
        })
    };
    handleAddTaskType = (e) => {
        e.preventDefault();
        let that = this;
        this.props.form.validateFields(['task_type_name','time_warn', 'time_out'],(err, values) => {
            if(!err){
                let { task_type_name, time_warn, time_out } = values;
                request({
                    url: '/api/add_type',
                    data: {
                        task_type_name,
                        time_warn,
                        time_out
                    },
                    success: (data) => {
                        notification.success({
                            message: '新增任务类型成功',
                            description: ''
                        });
                        that.props.form.setFields({
                            task_type_name: '',
                            time_warn: '',
                            time_out: ''
                        });
                        that.props.form.validateFields();
                        that.fetchTaskTypeList();
                    },
                    fail: (data) => {
                        this.setState({
                            addTypeErr: '不可重复新增'
                        })
                    }
                })
            }
        });
    };
  updateING = (type) => {
      this.setState({
        updating: true,
        updateType: type
      })
  };
  closeModal = () => {
    this.setState({
      updating: false
    })
  };
  updateType = ({task_type_id, time_warn, time_out}) => {
      request({
        url: '/api/update_type',
        data: {
          task_type_id: task_type_id,
          time_warn: time_warn,
          time_out: time_out
        },
        success: (res) => {
          notification.success({
            message: '修改任务类型成功'
          });
          this.closeModal();
          this.fetchTaskTypeList();
        }
      })
  };
    deleteType = (id) => {
        request({
            url: '/api/delete_type',
            data: {
                task_type_id: id
            },
            success: () => {
                notification.success({
                    message: '删除任务类型成功'
                });
                this.fetchTaskTypeList();
            }
        })
    };
    handleSetLoop = (e) => {
        e.preventDefault();
        let that = this;
        this.props.form.validateFields(['loop'],(err, values) => {
            if(!err){
                request({
                    url: '/api/set_loop',
                    data: {
                        loop_time: values.loop
                    },
                    success: () => {
                        notification.success({
                            message: '设置查询周期成功',
                            description: `设置成功后将每隔${values.loop}分钟自动刷新一次`
                        });
                        that.fetchTaskTypeList();
                    }
                })
            }
        })
    };
    handleChange = () => {
        this.setState({
            addTypeErr: false
        })
    }
}
let SettingForm = Form.create()(Setting);
export default SettingForm;