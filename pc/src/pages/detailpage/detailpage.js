import React from 'react';
import { Modal, Button } from 'antd';
import { link } from 'react-router-dom';
import { Steps } from 'antd';
const Step = Steps.Step;
import { Select } from 'antd';
const Option = Select.Option;


class Detailshow extends React.Component {

  handleChange(value) {
    console.log(`selected ${value}`);
}
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  state = {
    name:'qweqewq',
    obj:{}
  }
  render() {
    let name = this.state.name;
    let obj = this.state.obj;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>创建B类文件</Button>
        <Modal
          title="创建B类文件"
          okText="确定"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        
          <Steps direction="vertical" current={0}>
            <Step title="第一步" description={"效率100编号："+obj.ada} status="process" />
            <Step title="第二步" description={"操作类型:"+

             {}
             
            }/>
          </Steps>

        </Modal>
      </div>
    );
  }
}





export default Detailshow;

