//批量订单回退
import React from 'react'
import Base from './base'
class OrderBack extends Base{
  dataSource = [{
    order: 1,
    field: '订单编号',
    input_format: '订单编号',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word1', {
            initialValue: '',
          })(<span>按A类文件“订单编号”</span>)}
        </div>
      );
    },
  },
  {
    order: 2,
    field: '回退原因',
    input_format: '',
    output_format: (e, record) => {
      let { getFieldDecorator, getFieldsValue } = this.props.form;
      let { inputValue } = store;
      let values = getFieldsValue();
      console.log(values);
      return (
        <div>
          {getFieldDecorator('word2', {
            initialValue: '余额不足',
            valuePropName: 'defaultValue',
          })(
            <RadioGroup name="content" >
              <Radio value={'余额不足'}>余额不足</Radio>
              <Radio value={2}>
                其他
                          {
                  values.word2 === 2 ? <Input
                    placeholder="其他"
                    style={{ width: 85, marginLeft: '10px' }}
                    onChange={e => {
                      store.setInputValue({
                        word2Input: e.target.value
                      });
                    }}
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
  }]
  example = {
    input: '00012345678',
    output: '00012345678|余额不足',
  }
}
export default OrderBack