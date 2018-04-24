import React, { Component } from 'react';
import moment from 'moment';
import { Card, Form, Input, Select, Button, Table, Divider, Upload, notification, Modal } from 'antd';

class Deal extends Component{
    const columns = [{
        title: '效率编号100',
        dataIndex: 'id',
    },{
        title: '标题',
        dataIndex: 'title'
    },{
        title: '创建人',
        dataIndex: 'name'
    }];
    const data = [{
        id: '3115000416',
        title: '用户优惠套餐',
        name: '张三'
    },{
        id: '3215000416',
        title: '用户优惠套餐',
        name: '李四'
    }];
    render(){
        render(
            <div>
                <Card>
                    <Form layout="inline">
                        <Form.Item label={'效率编号100'}>
                            <Select defaultValue="3115000416">
                                <Option value={0}>3115000416</Option>
                                <Option value={1}>1234232133</Option>
                                <Option value={2}>3123421231</Option>
                                <Option value={3}>3215456123</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={'标题'}>
                            <Select defaultValue="关于用户优惠套餐">
                                <Option value={0}>关于用户优惠套餐</Option>
                                <Option value={1}>关于用户调查</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label={'创建人'}>
                            <Select defaultValue="张三">
                                <Option value={0}>张三</Option>
                                <Option value={1}>李四</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type={'primary'}>
                                查询
                            </Button>
                        </Form.Item>
                    </Form>
                    <Table columns={columns} dataSource={data}></Table>
                </Card>
            </div>
        )
    }
}