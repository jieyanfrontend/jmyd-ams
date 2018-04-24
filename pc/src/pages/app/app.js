import React, { Component } from 'react';
// import './app.css';
import moment from 'moment';
import { Card , Table , Select , Button , Form ,Input , Divider , Modal} from 'antd';
const { Option } = Select;
const { Search } = Input;
class App extends Component {
    state = {
        visible: false
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        location.pathname('./cafile')
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    columns = [{
        title:'编号',
        dataIndex: 'id'
    },{
        title: '效率100编号',
        dataIndex: 'ef_id',
    },{
        title: '标题',
        dataIndex: 'title',
    },{
        title: '创建人',
        dataIndex: 'create_name',
    },{
        title: '创建时间',
        dataIndex: 'create_time',
    },{
        title: '操作',
        render:() =>
            <span>
                <a href="">编辑</a>
                <Divider type="vertical"/>
                <a href="">删除</a>
                <Divider type="vertical"/>
                <a href="">查看详情</a>
            </span>
    }];
    data = [{
        id: '001',
        ef_id: '3115000416',
        title: '用户优惠套餐',
        name: '张三',
        create_time: moment().format('YYYY-MM-DD HH:ss')
    },{
        id: '002',
        ef_id: '3215000416',
        title: '用户优惠套餐',
        name: '李四',
        create_time: moment().format('YYYY-MM-DD HH:ss')
    }];
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div>
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
                    <Form.Item className='fr'>
                        <Search
                            placeholder={'请输入其他关键字'}
                            enterButton
                            onSearch={this.handleQuery}
                        />
                    </Form.Item>
                </Form>
                <div>
                    <Button type='primary' onClick={this.showModal}>创建任务</Button>
                    <Modal
                        title="Basic Modal"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <Card>
                            <div style={{marginBottom:5}}>
                                <span>编号：{this.data[0].id}</span>
                            </div>
                            <div style={{marginBottom:5}}>
                                <span>效率编号：</span><Input defaultValue={this.data[0].ef_id} style={{ width: 200 }}/>
                            </div>
                            <div style={{marginBottom:5}}>
                                <span>标题：</span><Input defaultValue={this.data[0].title} style={{ width: 200 }}/>
                            </div>
                            <div style={{marginBottom:5}}>
                                <span style={{marginRight:15}}>导入文件：</span><Button style={{marginRight:15}}>选择文件</Button><span>xx文件.txt</span>
                            </div>
                        </Card>
                        <Card>
                            <div style={{marginBottom:5}}>
                                <span>创建人:{this.data[0].name}</span>
                            </div>
                            <div>
                                <span>创建时间:{Date()}</span>
                            </div>
                        </Card>
                    </Modal>
                    <Button>导出</Button>
                </div>
                <Card>
                    <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.data}></Table>
                </Card>
            </div>
        );
    }
}
let AppForm = Form.create()(App);
export default AppForm;
