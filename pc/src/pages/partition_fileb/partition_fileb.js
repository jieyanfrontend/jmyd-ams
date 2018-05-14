import React, { Component } from 'react';
import { Modal, Table, Checkbox, Button, Form, Input, Radio } from 'antd';
// import request from '../../helpers/request';
let file_type = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];
import store from './store';
import { observer } from 'mobx-react';
// const RadioGroup = Radio.Group;
@observer
class partitionFileB extends Component {
    constructor(props){
        super(props);
        this.fetchPartition(props);
        // store.setDataPartition(props.dataSource);
    }
  columns = [
    {
      title: '编号',
      dataIndex: 'number',
    },
    {
      title: '创建人',
      dataIndex: 'user',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
    },
    {
      title: '文件类型',
      dataIndex: 'file_type',
      render: text => {
        return <span>{file_type[text]}</span>;
      },
    },
    {
      title: '打开附件',
      dataIndex: 'file_name',
      render: (text, record) => (
        <span>
          <a onClick={() => this.handleExportFile(record.file_id)}>{text}</a>
        </span>
      ),
    },
    {
      title: '分割',
      dataIndex: '',
      render: (text, record) => {
        console.log(record);
        return <Radio checked={record.checked} onChange={e => this.handleRadioChange(e, record)} />;
      },
    },
  ];
  render() {
    let { visible, setVisible, form,} = this.props;
    let { isFieldTouched, getFieldError, getFieldDecorator } = form;
    let partition = visible.partition;
    // dataSource = dataSource.filter(item => item.file_type == 2);
    // store.setDataPartition(dataSource);
      let { partitionData } = store;
      let dataSource = partitionData;
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button type="primary" onClick={() => setVisible(false)}>
          确认
        </Button>
      </React.Fragment>
    );
    return (
      <Modal
        visible={partition}
        title="分割B类文件"
        width={800}
        onCancel={() => setVisible(false)}
        footer={<ModalFooter />}
      >
        <Form>
          <Form.Item>
            <Table
              title={() => (
                <div>
                  <span className="mr15">效率100编号：{this.props.wf_id}</span>
                </div>
              )}
              dataSource={dataSource}
              columns={this.columns}
              size="small"
              bordered={false}
              rowKey="file_name"
            />
          </Form.Item>
          <Form.Item>
            <div className="pl20">
              <span>
                按每个文件{getFieldDecorator('partition_row', {
                  initialValue: 1000,
                  rules: [
                    {
                      required: true,
                      message: '请输入分割行数',
                    },
                  ],
                })(<Input size={'small'} style={{ width: 60 }} />)}行分割,<br />
                <span style={{ fontSize: 12 }}>
                  （自动在标题后缀+_001,比如关于优惠用户套餐_001，关于优惠用户套餐_002)
                </span>
              </span>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
  // componentDidMount() {
  //   this.fetchPartition(this.props);
  // }
  componentWillReceiveProps(nextProps) {
    this.fetchPartition(nextProps);
  }

  fetchPartition(props) {
    let { dataSource } = props;
    dataSource = dataSource.filter(item => item.file_type == 2);
    store.setDataPartition(dataSource);
    // console.log(store.partitionData);
  }
  handleRadioChange = (e, record) => {
    console.log(record);
    let data = Array.from(store.partitionData);
    record.checked = !record.checked;
    let index;
    data.forEach((d, i) => {
      if (record.file_id === d.file_id) {
        index = i;
      }
    });
    data.splice(index, 1, record);
    store.setDataPartition(data);
  };
}
export default Form.create()(partitionFileB);
