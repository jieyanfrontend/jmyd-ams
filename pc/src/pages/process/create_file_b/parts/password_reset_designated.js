//批量密码重置_指定密码
import React from 'react'
import Base from './base'
class PasswordRestDesignated extends Base{
  dataSource = [{
    order: 1,
    field: '电话号码',
    input_format: '电话号码',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word', {
            initialValue: '',
          })(<span>按A类文件“电话号码”</span>)}
        </div>
      );
    },
  },
  {
    order: 2,
    field: '密码',
    input_format: '-',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word2', {
            initialValue: '000000',
          })(<Input
            onChange={e => store.setInputValue({ word2Input: e.target.value })}
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
    input: '13912345678',
    output: '13912345678|000000',
  }
}
export default PasswordRestDesignated