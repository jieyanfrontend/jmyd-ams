import React, { Component } from 'react';
// import './cafile.css';
import { Card , Table , Select , Button , Form ,Input , Divider , Modal} from 'antd';
// import App from "./app";
const { Option } = Select;
const { Search } = Input;

class Cafile extends Component{
    state = {
        visible: false
    };
    showModal= () => {
        this.setState({
            visible:true
        })
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false
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
                <a href="#">打开附件</a>
            </span>
    },{
        title: '操作',
        render:() =>
            <span>
                <a href="#">操作</a>
                <Divider type="vertical"/>
                <a href="">删除</a>
            </span>
    }
    ]
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
                        <Form layout={"inline"}>
                            <Form.Item label={"文件类型"}>
                                <Select size={'small'} defaultValue={"全部"}></Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"} onClick={this.showModal}>创建B类文件</Button>
                                <Modal
                                    title="创建B类文件"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}>

                                </Modal>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"}>创建C类文件</Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type={'primary'} size={"small"}>创建D类文件</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
                <Card>
                    <Table rowSelection={rowSelection} columns={this.columns}></Table>
                </Card>
            </Card>
        )
    }
}
let CAFileForm = Form.create()(Cafile);
export default CAFileForm;
