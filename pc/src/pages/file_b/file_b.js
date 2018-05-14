import React, { Component } from 'react';
import { Modal, Form, Input, Select, Table, Radio, Button } from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import store2 from "../process/store";
import hasErrors from '../../helpers/has-errors';
import request from '../../helpers/request';
let { TextArea } = Input;
let Option = Select.Option;
let RadioGroup = Radio.Group;
let formProps = {
  labelCol: {
    span: 4,
    gutter: 16,
  },
  wrapperCol: {
    span: 18,
    gutter: 16,
  },
};
let allTypes = {
  批开停开机: {
    opertaion_type: 1,
    dataSource: [
      {
        order: '1',
        field: '电话号码',
        input_format: '号码',
        output_format: () => <span>按A类文件号码</span>,
      },
    ],
    columns: [
      {
        title: '顺序',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '输出格式',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678',
      output: '13912345678',
    },
  },
  批量实名登记: {
    opertaion_type: 2,
    dataSource: [
      {
        order: '1',
        field: '电话号码',
        input_format: '号码',
        output_format: () => <span>按A类文件号码</span>,
      },
      {
        order: '2',
        field: '证件类型',
        input_format: '证件类型',
        output_format: () => <span>按A类文件证件类型</span>,
      },
      {
        order: '3',
        field: '证件号码',
        input_format: '证件号码',
        output_format: () => <span>按A类文件证件号码</span>,
      },
      {
        order: '4',
        field: '证件地址',
        input_format: '证件地址',
        output_format: () => <span>按A类文件证件地址</span>,
      },
      {
        order: '5',
        field: '客户名称',
        input_format: '客户名称',
        output_format: () => <span>按A类客户名称</span>,
      },
    ],
    columns: [
      {
        title: '顺序',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '格式内容',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
      output: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
    },
  },
  批量订单回退: {
    opertaion_type: 3,
    dataSource: [
      {
        order: 1,
        field: '订单编号',
        input_format: '订单编号',
        output_format: () => <span>按A类文件订单编号</span>,
      },
      {
        order: 2,
        field: '回退原因',
        input_format: '',
        output_format: () => (
          <RadioGroup defaultValue={''} name="content">
            <Radio value="rest">余额不足</Radio>
            <Radio value="other">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
    ],
    columns: [
      {
        title: '顺序',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '格式内容',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '00012345678',
      output: '00012345678|余额不足',
    },
  },
  批量产品订购退订与变更: {
    opertaion_type: 4,
    dataSource: [
      {
        order: 1,
        field: '电话号码',
        input_format: '电话号码',
        output_format: () => <span>按A类文件手机号码</span>,
      },
      {
        order: 2,
        field: '备注',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="批量产品订购退订与变更">
            <Radio value="rest">优惠已到期</Radio>
            <Radio value="other">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '输出格式',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678',
      output: '13912345678|优惠已到期',
    },
  },
  批量密码重置: {
    opertaion_type: 5,
    dataSource: [
      {
        order: 1,
        field: '电话号码',
        input_format: '电话号码',
        output_format: () => <span>按A类文件手机格式</span>,
      },
      {
        order: 2,
        field: '密码',
        input_format: '-',
        output_format: () => <Input defaultValue="000000" />,
      },
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '输出格式',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678',
      output: '13912345678|000000',
    },
  },
  批量产品订购退订: {
    opertaion_type: 6,
    dataSource: [
      {
        order: 1,
        field: '电话号码',
        input_format: '电话号码',
        output_format: () => <span>按A类文件手机号码</span>,
      },
      {
        order: 2,
        field: '增值产品代码',
        input_format: '增值产品代码',
        output_format: () => <span>按A类文件增值产品代码</span>,
      },
      {
        order: 3,
        field: '生效方式/代码',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="生效方式/代码">
            <Radio value="1">0</Radio>
            <Radio value="2">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
      {
        order: 4,
        field: '操作类型代码',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="操作类型代码">
            <Radio value="1">N</Radio>
            <Radio value="2">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
      {
        order: 5,
        field: '备注',
        input_format: '-',
        output_format: () => <TextArea rows="2" />,
      },
      {
        order: 6,
        field: '附加属性编码',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="附加属性编码">
            <Radio value="1">空</Radio>
            <Radio value="2">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '输出格式',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678|JYPT750.180112823084.0',
      output:
        '13912345678|JYPT750.180112823084.0|0|N|20188642吴振明18年一季度流量（存量）营销优惠活动2月外呼套餐迁转及升级|空',
    },
  },
  批量多层产品订购退订: {
    opertaion_type: 7,
    dataSource: [
      {
        order: 1,
        field: '电话号码',
        input_format: '电话号码',
        output_format: () => <span>按A类文件手机号码</span>,
      },
      {
        order: 2,
        field: '用户主体产品ID',
        input_format: '用户主体产品ID',
        output_format: () => <span>按A类文件产品主体ID</span>,
      },
      {
        order: 3,
        field: '产品结构描述',
        input_format: '产品结构描述',
        output_format: () => <span>按A类文件产品结构描述</span>,
      },
      {
        order: 4,
        field: '缴费方式',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="缴费方式">
            <Radio value="1">cash</Radio>
            <Radio value="2">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
      {
        order: 5,
        field: 'POS流水号',
        input_format: '-',
        output_format: () => <Input />,
      },
      {
        order: 6,
        field: '开户银行',
        input_format: '-',
        output_format: () => (
          <RadioGroup name="开户银行">
            <Radio value="1">空</Radio>
            <Radio value="2">
              <Input placeholder="其他" style={{ width: 85 }} />
            </Radio>
          </RadioGroup>
        ),
      },
      {
        order: 7,
        field: '支票号',
        input_format: '-',
        output_format: () => <Input />,
      },
      {
        order: 8,
        field: '实际收取金额',
        input_format: '-',
        output_format: () => <Input defaultValue="0" />,
      },
      {
        order: 9,
        field: '备注',
        input_format: '-',
        output_format: () => <TextArea row={2} />,
      },
    ],
    columns: [
      {
        title: '序号',
        dataIndex: 'order',
      },
      {
        title: '字段',
        dataIndex: 'field',
      },
      {
        title: 'A类文件输入格式',
        dataIndex: 'input_format',
      },
      {
        title: '输出格式',
        dataIndex: 'output_format',
        render: Comp => <Comp />,
      },
    ],
    example: {
      input: '13912345678|JYPT750.180112822084.0',
      output: '13912345678|JYPT750.180112823084.0|Cash||||0|',
    },
  },
};
@observer
class CreateFileB extends Component {
  render() {
    let { visible, setVisible, wf_id, form } = this.props;
    // console.log(this.props);
    // console.log(form);
    let fileBVisible = visible.file_b;
    let type = store.type;
    let { dataSource, columns, example = {} } = allTypes[type];
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button type="primary" onClick={() => this.createB()}>
          确认
        </Button>
      </React.Fragment>
    );
    return (
      <Modal
        visible={fileBVisible}
        title="创建B类文件"
        footer={<ModalFooter />}
        onCancel={() => setVisible(false)}
        width={800}
      >
        <Form>
          <Form.Item label="效率100编号" {...formProps}>
            {/*{*/}
            {/*getFieldDecorator('wf_id',{*/}
            {/*initialValue: wf_id,*/}
            {/*rules: [{*/}
            {/*required: true,*/}
            {/*message: '请输入效率100编号'*/}
            {/*}]*/}
            {/*})(<Input/>)*/}
            {/*}*/}
            <Input disabled={true} defaultValue={wf_id} />
          </Form.Item>
          <Form.Item label="操作类型" {...formProps}>
            <Select defaultValue={'批开停开机'} onChange={this.changeSelectType}>
              {Object.keys(allTypes).map(type => (
                <Option value={type} key={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="输出格式" {...formProps}>
            <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="order" size={'small'} />
          </Form.Item>
          <Form.Item label="输入示例" {...formProps}>
            {example.input}
          </Form.Item>
          <Form.Item label="输出示例" {...formProps}>
            {example.output}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
  changeSelectType = value => {
    store.changeType(value);
  };
  createB = () => {
    let { getFieldsValue, getFieldsError } = this.props.form;
    let canCreate = !hasErrors(getFieldsError());
    if (canCreate) {
      let values = getFieldsValue();
      let type = store.type;
      let operation_type = allTypes[type].opertaion_type;
      let id = this.props.id;
      let that = this;
      console.log(typeof operation_type);
      request({
        url: '/api/create_file_b',
        data: {
          operation_type,
          id,
          word1: '',
          word2: '',
          word3: '',
          word4: '',
          word5: '',
          word6: '',
          word7: '',
          word8: '',
          word9: '',
        },
        // postType: 'formdata',
        success: res => {
          this.props.setVisible(false);
          that.fetchProcessList();
        },
        fail: data => {
          // console.log(data);
          //this.props.store.setCreateVisible(false);
        },
      });
    }
  };
    fetchProcessList = () => {
        request({
            url:'/api/get_file_list',
            data:{
                id:this.props.id,
                keyword:'',
                file_type:'',
            },
            success: ({table}) => {
                store2.setProcessList(table);
            }
        })
    }}
export default Form.create()(CreateFileB);
