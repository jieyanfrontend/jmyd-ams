import React from 'react'
import { Form, Table } from 'antd'
import { form_props } from '../../../../config/CONSTANT'
class Base extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Form.Item label="输出格式" {...form_props}>
            <Table dataSource={this.dataSource} columns={this.columns} pagination={false} rowKey="order" size={'small'} />
        </Form.Item>
        <Form.Item label="输入示例" {...form_props}>
          {this.example.input}
        </Form.Item>
        <Form.Item label="输出示例" {...form_props}>
          {this.example.output}
        </Form.Item>
      </React.Fragment>
    )
  }
  getParams(){
    
  }
}
export default Base;