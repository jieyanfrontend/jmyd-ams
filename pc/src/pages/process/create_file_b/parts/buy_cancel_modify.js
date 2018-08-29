//批量产品订购退订与变更
import React from 'react'
import Base from './base'
class BuyCancelModify extends Base{
  dataSource = [{
    order: 1,
    field: '电话号码',
    input_format: '电话号码',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word1', {
            initialValue: '',
          })(<span>按A类文件“电话号码”</span>)}
        </div>
      );
    },
  },
  {
    order: 2,
    field: '备注',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {getFieldDecorator('word2', {
            valuePropName: 'defaultValue',
            initialValue: '优惠已到期'
          })(
            <RadioGroup name="批量产品订购退订与变更">
              <Radio value="优惠已到期">优惠已到期</Radio>
              <Radio value={2}>
                其他
                  {
                  this.props.form.getFieldsValue().word2 === 2 ? <Input
                    placeholder="其他"
                    style={{ width: 85 }}
                    onInput={e => store.setInputValue({ word2Input: e.target.value })}
                  /> : null
                }
              </Radio>
            </RadioGroup>
          )}
        </div>
      );
    },
  }]
  columns = [{
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
  }]
  example = {
    input: '13912345678',
    output: '13912345678|优惠已到期',
  }
}
export default BuyCancelModify