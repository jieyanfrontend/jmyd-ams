import React, { Component } from 'react';
import { Modal, Form, Input, Select, Spin, Icon } from 'antd';
import { observer } from 'mobx-react';
import store from '../store';
import handler from './handler'
import { b_types, form_props } from '../../../config/CONSTANT'
import Parts from './parts/index'
let Option = Select.Option;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
@observer
class CreateFileB extends Component {
  render() {
    let { props, params, form } = this.props;
    let { visible, loading, type } = props;
    let Part = Parts[type];
    return (
      <Modal
        mask={false}
        visible={visible}
        title="创建B类文件"
        width={800}
        destroyOnClose={true}>
        <Spin spinning={loading} indicator={antIcon}>
          <Form name='create_b'>
            <Form.Item label="效率100编号" {...form_props}>
              <Input disabled={true} defaultValue={params.wf_id} />
            </Form.Item>
            <Form.Item label="操作类型" {...form_props}>
              <Select 
                dropdownStyle={{zIndex: 1000}}
                defaultValue={type} onChange={val => store.create_b.type = val}>
                {b_types.map(b_type => (
                  <Option value={b_type.label} key={b_type.label}>
                    {b_type.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Part form={form}/>
          </Form>
        </Spin>
      </Modal>
    );
  }
  confirm(){
    this.getParams()
  }
}
// export default CreateFileB;
export default Form.create()(CreateFileB);