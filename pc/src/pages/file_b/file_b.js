import React from 'react'
import { Modal, Select } from 'antd'

export default class extends React.Component {
  render(){
    return <Modal  visible={true}>
      <Select>
        <Select.Option value='123'>123</Select.Option>  
        <Select.Option value='12345'>12345</Select.Option>  
      </Select>  
    </Modal>
  }
}