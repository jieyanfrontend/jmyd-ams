//批量账户变更
import React from 'react'
import Base from './base'
class AccountModify extends Base{
  dataSource = [
    {
      order: 1,
      field: '手机号码',
      input_format: '手机号码',
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
      field: '帐本科目标识',
      input_format: '-',
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
      field: '变更金额',
      input_format: '变更金额',
      output_format: () => {
        let { getFieldDecorator, getFieldsValue } = this.props.form;
        return (
          <div>
            {getFieldDecorator('word3', {
              initialValue: '',
            })(<span>按A类文件含金额字段</span>)}
          </div>
        );
      },
    },
    {
      order: 4,
      field: '是否进帐本科目明细',
      input_format: '-',
      output_format: () => {
        let { getFieldDecorator } = this.props.form;
        let { inputValue } = store;
        return (
          <div>
            {getFieldDecorator('word4', {
              initialValue: ''
            })(
              <Input
                onChange={e => store.setInputValue({ word4Input: e.target.value })}
              />
            )}
          </div>
        );
      },
    },
    {
      order: 5,
      field: '生效时间',
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
      field: '失效时间',
      input_format: '-',
      output_format: () => {
        let { getFieldDecorator } = this.props.form;
        let { inputValue } = store;
        return (
          <div>
            {getFieldDecorator('word6', {
              initialValue: '',
            })(<Input
              onChange={e => store.setInputValue({ word6Input: e.target.value })}
            />)}
          </div>
        );
      },
    },
  ]
  columns = [
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
  ]
  example = {
    input: '13544977339|1000',
    output: '13544977339|2|10.00|0|20180101|20370101|',
  }
}
export default AccountModify;