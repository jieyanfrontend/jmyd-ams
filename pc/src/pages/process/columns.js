import React from 'react'
import { Divider } from 'antd'
import { file_types, file_types_num } from '../../config/CONSTANT'
import handler from './handler'
export default [{
  title: '文件类型',
  dataIndex: 'file_type',
  render: (text) => {
      return <span>{file_types[text]}</span>
  }
}, {
  title: '效率100编号',
  dataIndex: 'wf_id'
}, {
  title: '标题',
  dataIndex: 'title'
}, {
  title: '文件ID',
  dataIndex: 'file_id'
}, {
  title: '数据来源',
  dataIndex: 'data_source'
}
  , {
  title: '创建人',
  dataIndex: 'creator'
}, {
  title: '创建时间',
  dataIndex: 'create_time'
}, {
  title: '备注',
  dataIndex: 'remark'
}, {
  title: '打开附件',
  dataIndex: 'file_name',
  render: (text, record) => (
      <span>
          <a onClick={() => handler.exportFileA(record.file_id)}>{text}</a></span>
  )
}, {
  title: '操作',
  render: (text, record) => (<span>
      <a onClick={() => handler.editItem(record)}>编辑</a>
      <Divider type='vertical' />
      <a onClick={() => handler.deleteItem(record)}>删除</a>
  </span>)
}];