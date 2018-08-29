//批量更改客户资料
import React from 'react'
import Base from './base'
class ModifyUserData extends Base{
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
  },
  {
    order: '2',
    field: '证件类型',
    input_format: '证件类型',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word2', {
            initialValue: '',
          })(<span>按A类文件“证件类型”</span>)}
        </div>
      );
    },
  },
  {
    order: '3',
    field: '证件号码',
    input_format: '证件号码',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word3', {
            initialValue: '',
          })(<span>按A类文件“证件号码”</span>)}
        </div>
      );
    },
  },
  {
    order: '4',
    field: '证件地址',
    input_format: '证件地址',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word4', {
            initialValue: '',
          })(<span>按A类文件“证件地址”</span>)}
        </div>
      );
    },
  },
  {
    order: '5',
    field: '客户名称',
    input_format: '客户名称',
    output_format: () => {
      let { getFieldDecorator } = this.props.form;
      return (
        <div>
          {getFieldDecorator('word5', {
            initialValue: '',
          })(<span>按A类文件“客户名称”</span>)}
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
    input: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
    output: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
  }
}
export default ModifyUserData