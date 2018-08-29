import React from 'react';
import { Form, Select, Button, Table, Divider, Icon, Spin } from 'antd';
import CreateB from './create_file_b/index'
import { observer } from 'mobx-react';
import store from './store';
import handler from './handler';
import columns from './columns';
import style from './process.css';
import { file_types, file_types_num } from '../../config/CONSTANT'
const Option = Select.Option;

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
@observer
class Process extends React.Component {
    constructor(props){
        super(props);
        store.params = props.match.params;
    }
    render() {
        let { process_list, loading, params, create_b, wf_id } = store;
        let dataSource = process_list.slice();
        let { form } = this.props;
        let { getFieldDecorator } = form;
        let isValidURL = params.id && params.wf_id;
        if (!isValidURL) return null;
        let SelectBar = () => (
            <Form layout='inline' name='process' className={style.form}>
                <Form.Item label='文件类型'>
                    {getFieldDecorator('type', {
                        initialValue: '0'
                    })(
                    <Select className={style.select}>
                        <Option value='0'>全部</Option>
                        {file_types_num.map(type_num => (
                        <Option value={type_num} key={type_num}>{file_types[type_num]}</Option>
                        ))}
                    </Select>
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type={'primary'} onClick={() => handler.fetchProcessList({form})}>查询</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => store.create_b.visible = true}>创建B类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => store.create_b_check.visible = true}>创建B类比对文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileCItem()}>创建C类文件</Button>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' onClick={() => this.fileEItem()}>创建E类文件</Button>
                </Form.Item>
                <Form.Item className='fr'>
                    <Button onClick={() => this.patitionFileB()}>分割</Button>
                </Form.Item>
            </Form>
        );
        return (
        <div className={'init-height'}>
            <a onClick={this.goBack}>
                <Button type="primary">返回</Button>
            </a>
            <SelectBar />
            <Spin spinning={loading} tip='登陆中...' indicator={antIcon}>
                <Table dataSource={dataSource} columns={columns} rowKey='file_id' />
            </Spin>
            <CreateB props={create_b} params={params}/> 
        </div>
        )
    }
    componentDidMount() {
        handler.fetchProcessList({form: this.props.form});
    };
}
export default Form.create()(Process);