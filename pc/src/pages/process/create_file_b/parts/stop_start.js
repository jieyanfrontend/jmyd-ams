//批量停开机
import React from 'react'
import Base from './base'
class StopStart extends Base{
  dataSource = [{
    order: '1',
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
    title: '输出格式',
    dataIndex: 'output_format',
    render: Comp => <Comp />,
  }]
  example = {
    input: '13912345678',
    output: '13912345678',
  }
}
export default StopStart;