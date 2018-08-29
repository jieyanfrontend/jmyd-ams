//批量积分修正
import React from 'react'
import Base from './base'
class BonusCorrect extends Base{
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
      field: '帐务周期',
      input_format: '-',
      output_format: () => {
        let { getFieldDecorator } = this.props.form;
        return (
          <div>
            {getFieldDecorator('word2', {
              initialValue: '',
            })(<Input
              style={{ width: 85 }}
              onInput={e => store.setInputValue({ word2Input: e.target.value })}
            />)}
          </div>
        );
      },
    },
    {
      order: 3,
      field: '积分类型',
      input_format: '-',
      output_format: () => {
        let { getFieldDecorator, getFieldsValue } = this.props.form;
        return (
          <div>
            {getFieldDecorator('word3', {
              initialValue: '',
            })(<Input
              style={{ width: 85 }}
              onInput={e => store.setInputValue({ word3Input: e.target.value })}
            />)}
          </div>
        );
      },
    },
    {
      order: 4,
      field: '调整积分',
      input_format: '调整积分',
      output_format: () => {
        let { getFieldDecorator } = this.props.form;
        let { inputValue } = store;
        return (
          <div>
            {getFieldDecorator('word4', {
              initialValue: ''
            })(
              <span>按A类文件含金额字段</span>
            )}
          </div>
        );
      },
    },
    {
      order: 5,
      field: '修正类型',
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
      field: '备注',
      input_format: '-',
      output_format: () => {
        let { getFieldDecorator } = this.props.form;
        let { inputValue } = store;
        return (
          <div>
            {getFieldDecorator('word6', {
              initialValue: '',
            })(<TextArea row={2}
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
  example: {
    input: '13544977339|100',
    output: '13702249646|20150200|3|-10|1|测试积分批量调整方案|',
  }
}
export default BonusCorrect;