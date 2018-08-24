import React, { Component } from 'react';
import { Modal, Table, Checkbox, Button, List, Form, Input, Spin } from 'antd';
import store from './store';
import store2 from "../process/store";
import { observer } from 'mobx-react';
import exportFile from '../../helpers/export-file';
import hasErrors from "../../helpers/has-errors";
import request from "../../helpers/request";
import messageSuccess from '../../helpers/successMessage';

import commonFormProps from '../../config/common-form';

const warnAlert = {
    msg: '已存在该类文件，请确认无误后操作'
}
let formProps = {
    labelCol: {
        span: 4,
        gutter: 16,
    },
    wrapperCol: {
        span: 18,
        gutter: 16,
    },
};
let file_type = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];
@observer
class CreateFileC extends Component {
    state = {
        myKey: Math.random(),
        checked:false
    };
  columns = [
    {
      title: '编号',
      dataIndex: 'number',
    },
    {
      title: '创建人',
      dataIndex: 'user',
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
    },
    {
      title: '文件类型',
      dataIndex: 'file_type',
      render: text => {
        return <span>{file_type[text]}</span>;
      },
    },
    {
      title: '打开附件',
      dataIndex: 'file_name',
      render: (text, record) => (
        <span>
          <a  onClick={() => this.handleExportFile(record.file_id)}>{text}</a>
        </span>
      ),
    },
    {
      title: '选择比对',
      dataIndex: '',
      render: (text, record) => {
        return <Checkbox checked={record.checked} onChange={e => this.onCheckChange(e,record)} />;
      },
    },
  ];
  render() {
    let { visible, setVisible, dataSource } = this.props;
    let {resTableC, isDisabledBtn, datas} = store;
    let fileCVisible = visible.file_c;
    let { getFieldDecorator, getFieldValue } = this.props.form;
    datas = dataSource;
    let data = datas.filter(t => t.file_type === 2);
    let Footer = () => (
      <footer style={{ textAlign: 'right' }}>
        <Button type="primary" disabled={isDisabledBtn} onClick={this.createC}>执行比对</Button>
      </footer>
    );
    let ModalFooter = () => (
      <React.Fragment>
        <Button onClick={() => setVisible(false)}>取消</Button>
        <Button type="primary" onClick={this.handleConfirm}>
          确认
        </Button>
      </React.Fragment>
    );
      return (
      <Modal
        key={this.state.myKey}
        visible={fileCVisible}
        title="创建C类文件"
        width={800}
        footer={<ModalFooter />}
        onCancel={() => setVisible(false)}
      >
        <Table loading={store.loading}
          title={() => (
                <Form>
                    <Form.Item label="效率100编号" {...formProps}>
                        <Input disabled={true} defaultValue={this.props.wf_id} />
                    </Form.Item>
                </Form>
          )}
          pagination={{defaultPageSize:8}}
          dataSource={Array.from(data)}
          columns={this.columns}
          size="small"
          bordered={false}
          footer={Footer}
          rowKey="file_id"
        />
        <div><p>比对结果:{resTableC.msg}</p></div>
          {!resTableC.table ? null :
              <div>
              <p>
                  起源文件{resTableC.table[0].rowNumber}:{resTableC.table[0].rowdata1}<br/>
                  目标文件{resTableC.table[0].rowNumber}:{resTableC.table[0].rowdata2}<br/>
                  起源文件{resTableC.table[1].rowNumber}:{resTableC.table[1].rowdata1}<br/>
                  目标文件{resTableC.table[1].rowNumber}:{resTableC.table[1].rowdata2}
              </p>
          </div>}
      </Modal>
    );
  }
  onCheckChange = (e, record) => {
      let {dataSource} = this.props;
      let checkedData = Array.from(dataSource);
      checkedData.forEach(data => {
          if(data.file_id === record.file_id){
              record.checked = !record.checked;
          }
          }
      );
      store.datas = checkedData;
      console.log(store.datas);
      /*
      if(e.target.checked) {
          checkedData.push(record)
      } else {
          checkedData.splice(checkedData.indexOf(record),1)
      }
*/
      // store.setData(checkedData);
// /*
//       let { file_id } = record;
//       let { file_ids } = store;
//       let allFile_Ids = Array.from(file_ids);
//       if (e.target.checked) {
//         allFile_Ids.push(file_id);
//     } else{
//         allFile_Ids.splice(allFile_Ids.indexOf(file_id), 1);
//     }
//       store.setFileIds(allFile_Ids);
// */

  };
  handleExportFile = file_id => {
    let { id } = this.props;
    exportFile({
      url: '/api/get_file',
      data: {
        id: id,
        file_id: file_id,
      },
    });
  };
  createC = () => {
      let datas = Array.from(store.datas);
      let checkedArr = datas.filter(v => v.checked);
      let ids = checkedArr.map(i => i.file_id);
      console.log(ids);
      datas = datas.map(v =>{
          v.checked = false;
          return v});
      store.datas = datas;
      let { getFieldsError } =this.props.form;
      let all_ids = ids.toString();
      let id = this.props.id;
      let canCreate = !hasErrors(getFieldsError());
      if(canCreate){
              store.changeBtn(true);
              store.setLoading(true);
              request({
            url:'/api/create_file_c',
            data:{
                id,
                file_ids: all_ids
            },
            success: res => {
                store.setTable(res);
                messageSuccess(res);
                this.fetchProcessList();
            },
            fail: resp => {
                store.setTable(resp);
            },
            complete: () => {
                store.changeBtn(false);
                store.setLoading(false);
            }
        })
  }
};
/*    warning = (res) => {
        Modal.warning({
            title:'警告',
            content: res.msg
        })
    };*/
handleConfirm = ()=> {
      this.fetchProcessList();
      this.props.setVisible(false);
    this.setState({
        myKey:Math.random()
    })
};
    fetchProcessList = () => {
        request({
            url:'/api/get_file_list',
            data:{
                id:this.props.id,
                keyword:'',
                file_type:'',
            },
            success: ({table}) => {
                store2.setProcessList(table);
            }
        })
    }

}
export default Form.create()(CreateFileC);
