//批量多层产品订购退订
import React from 'react'
import Base from './base'
class MultiBuyCancel extends Base{
  dataSource = [{
    order: 1,
    field: '客户号码',
    input_format: '客户号码',
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
    field: '用户主体产品ID',
    input_format: '用户主体产品ID',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word2', {
            initialValue: '',
          })(<Input
            placeholder="id"
            style={{ width: 85 }}
            onInput={e => store.setInputValue({ word2Input: e.target.value })}
          />)}
        </div>
      );
    },
  },
  {
    order: 3,
    field: '产品结构描述',
    input_format: '产品结构描述',
    output_format: () => {
      let { getFieldDecorator, getFieldsValue } = this.props.form;
      let values = getFieldsValue();
      console.log(values);
      let { word2 } = values
      return (
        <div>
          {getFieldDecorator('word3', {
            initialValue: '',
          })(<span>按A类文件“产品ID”</span>)}
        </div>
      );
    },
  },
  {
    order: 4,
    field: '缴费方式',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {getFieldDecorator('word4', {
            valuePropName: 'defaultValue',
            initialValue: 'cash'
          })(
            <RadioGroup name="缴费方式">
              <Radio value="cash">cash</Radio>
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
    field: 'POS流水号',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word5', {
            initialValue: '',
          })(<Input
            onChange={e => store.setInputValue({ word5Input: e.target.value })}
          />)}
        </div>
      );
    },
  },
  {
    order: 6,
    field: '开户银行',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      let { inputValue } = store;
      return (
        <div>
          {getFieldDecorator('word6', {})(
            <Input
              style={{ width: 85 }}
              onChange={e => store.setInputValue({ word6Input: e.target.value })}
            />
          )}
        </div>
      );
    },
  },
  {
    order: 7,
    field: '支票号',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word7', {
            initialValue: '',
          })(<Input
            onChange={e => store.setInputValue({ word7Input: e.target.value })}
          />)}
        </div>
      );
    },
  },
  {
    order: 8,
    field: '实际收取金额',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word8', {
            initialValue: '',
          })(<Input
            onChange={e => store.setInputValue({ word8Input: e.target.value })}
          />)}
        </div>
      );
    },
  },
  {
    order: 9,
    field: '备注',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word9', {
            initialValue: '',
          })(<TextArea row={2}
            onChange={e => store.setInputValue({ word9Input: e.target.value })}
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
    input: '13912345678|JYPT750.180112822084.0',
    output: '13912345678|JYPT750.180112823084.0|Cash||||0|',
  }
}
export default MultiBuyCancel;