import React, { Component } from 'react';
// import './cafile.css';
import { Card , Table , Select , Button , Form ,Input , Divider , Modal} from 'antd';
import moment from "moment/moment";
// import App from "./batchprocess";
const { Option } = Select;
const { Search } = Input;

class Cafile extends Component{
    state = {
        edit1visible: false,
        visible: false,
        delete1visible: false,
    };
    showModal= () => {
        this.setState({
            visible: true,
        })
    };
    showEditModal = () => {
        this.setState({
            edit1visible: true,
        })
    };
    showDeleteModal = () => {
        this.setState({
            delete1visible: true,
        })
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            delete1visible:false,
            edit1visible:false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            delete1visible:false,
            edit1visible:false,
        });
    }
    columns = [{
        title: '序号',
        dataIndex: 'order'
    },{
        title: '效率100编号',
        dataIndex: 'ef_id',
    },{
        title: '文件类型',
        dataIndex: 'files_type',
    },{
        title: '标题',
        dataIndex: 'title',
    },{
        title: '文件名称',
        dataIndex: 'files_name',
    },{
        title: '创建人',
        dataIndex: 'create_name',
    },{
        title: '创建时间',
        dataIndex: 'create_time',
    },{
        title: '备注',
        dataIndex: 'notice',
    },{
        title: '打开附件',
        render:() =>
            <span>
                <a href="#">xx文件.txt</a>
            </span>
    },{
        title: '操作',
        render:() =>
            <span>
                <a onClick={this.showEditModal}>编辑</a>
                <Divider type="vertical"/>
                <a onClick={this.showDeleteModal}>删除</a>
            </span>
    }
    ]
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
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return(
            <Card bordered={false} >
                <Card title={<Button size={'small'}>返回</Button>}>
                    <div>
                        <Form layout={"inline"} style={{marginTop:-20}}>
                            <Form.Item label={"文件类型"}>
                                <Select size={'small'} defaultValue={"全部"}></Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"} onClick={this.showModal}>创建B类文件</Button>
                                <Modal
                                    title="创建B类文件"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    okText={'确定'}
                                    cancelText={'返回'}
                                >
                                        <Card>
                                            <div>
                                                <span>第一步：效率100编号</span>
                                                <Input style={{ width: 200 }}/>
                                            </div>
                                        </Card>
                                        <Card>
                                            <div>
                                                <span style={{marginRight: 5}}>第二步：操作类型</span>
                                                <Select defaultValue="批量停开机"></Select>
                                            </div>
                                            <div>
                                                <div>
                                                    <span style={{fontSize:12}}>输出格式:</span>
                                                    <table border="1" style={{float:'right',width:350,textAlign:'center',padding:5,margin:5}}>
                                                        <tr>
                                                            <td>顺序</td>
                                                            <td>字段</td>
                                                            <td>1号文件输出格式</td>
                                                            <td>输出格式</td>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>号码</td>
                                                            <td>号码</td>
                                                            <td>按1号文件号码</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div style={{clear:'both'}}>
                                                    <span style={{fontSize:12}}>输入示例：13533498555</span>
                                                </div>
                                                <div>
                                                    <span style={{fontSize:12}}>输入示例：13533498555</span>
                                                </div>
                                            </div>
                                        </Card>
                                </Modal>
                                <Modal visible={this.state.edit1visible}
                                       title={'编辑'}
                                       onOk={this.handleOk}
                                       onCancel={this.handleCancel}
                                       okText={'确定'}
                                       cancelText={'返回'}>
                                    <Card>
                                        <span style={{display:'block' ,marginBottom:5}}>编号：{this.data[0].id}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>效率100编号：<Input size={'small'} style={{width:200}} defaultValue={this.data[0].ef_id}/></span>
                                        <span style={{display:'block' ,marginBottom:5}}>标题：<Input size={'small'} style={{width:200}} defaultValue={this.data[0].title}/></span>
                                        <span style={{display:'block' ,marginBottom:5}}>创建人：{this.data[0].name}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>创建时间：{this.data[0].create_time}</span>
                                    </Card>
                                </Modal>
                                <Modal  title={'删除'}
                                        onOk={this.handleOk}
                                        onCancel={this.handleCancel}
                                        visible={this.state.delete1visible}
                                        okText={'确定'}
                                        cancelText={'返回'}>
                                    <Card>
                                        <span style={{display:'block' ,marginBottom:5}}>编号：{this.data[0].id}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>效率100编号：{this.data[0].ef_id}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>标题：{this.data[0].title}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>创建人：{this.data[0].name}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>创建时间：{this.data[0].create_time}</span>
                                        <span style={{display:'block' ,marginBottom:5}}>删除原因：<Input size={'small'} style={{width:200}}/></span>
                                    </Card>
                                </Modal>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"}>创建C类文件</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"}>创建D类文件</Button>
                            </Form.Item>
                            <Form.Item style={{float:'right'}}>
                                <Button size={"small"}>分割</Button>
                            </Form.Item>
                            <Form.Item style={{float:'right'}}>
                                <Button size={"small"}>导出</Button>
                            </Form.Item>
                        </Form>
                    </div>
                {/*</Card>*/}
                {/*<Card>*/}
                    <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.data}></Table>
                </Card>
            </Card>
        )
    }
}
let CAFileForm = Form.create()(Cafile);
export default CAFileForm;
