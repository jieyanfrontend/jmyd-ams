//批量产品订购退订
import React from 'react'
import Base from './base'
class BuyCancel extends Base{
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
    field: '增值产品代码',
    input_format: '增值产品代码',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word2', {
            initialValue: '',
          })(<span>按A类文件“产品ID”</span>)}
        </div>
      );
    },
  },
  {
    order: 3,
    field: '生效方式/代码',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {getFieldDecorator('word3', {
            valuePropName: 'defaultValue',
            initialValue: '0'
          })(
            <RadioGroup name="生效方式/代码">
              <Radio value="0">0</Radio>
              <Radio value={3}>其他
                  {
                  this.props.form.getFieldsValue().word3 === 3 ? <Input
                    placeholder="其他"
                    style={{ width: 85 }}
                    onInput={e => store.setInputValue({ word3Input: e.target.value })}
                  /> : null
                }
              </Radio>
            </RadioGroup>
          )}
        </div>
      );
    },
  },
  {
    order: 4,
    field: '操作类型代码',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {getFieldDecorator('word4', {
            valuePropName: 'defaultValue',
            initialValue: 'N'
          })(
            <RadioGroup name="操作类型代码" >
              <Radio value={"N"}>N</Radio>
              <Radio value={4}>
                其他
                  {
                  this.props.form.getFieldsValue().word4 === 4 ? <Input
                    placeholder="其他"
                    style={{ width: 85 }}
                    onInput={e => store.setInputValue({ word4Input: e.target.value })}
                  /> : null
                }
              </Radio>
            </RadioGroup>
          )}
        </div>
      );
    },
  },
  {
    order: 5,
    field: '备注',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word5', {
            initialValue: '',
          })(<TextArea row={2}
            onChange={e => store.setInputValue({ word5Input: e.target.value })}
          />)}
        </div>
      );
    },
  },
  {
    order: 6,
    field: '附加属性编码',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {/*{getFieldDecorator('word6', {})(
            <RadioGroup name="附加属性编码" initialValue={''}>
              <Radio value="">无</Radio>
              <Radio value={inputValue}>
                <Input
                  placeholder="其他"
                  style={{ width: 85 }}
                  onInput={e => store.setInputValue(e.target.value)}
                />
              </Radio>
            </RadioGroup>
          )}*/}
          {getFieldDecorator('word6', {
            initialValue: '',
          })(<Input
            onChange={e => store.setInputValue({ word6Input: e.target.value })}
          />)}
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
    input: '13912345678|JYPT750.180112823084.0',
    output:
      '13912345678|JYPT750.180112823084.0|0|N|20188642吴振明18年一季度流量（存量）营销优惠活动2月外呼套餐迁转及升级|空',
  }
}
export default BuyCancel;