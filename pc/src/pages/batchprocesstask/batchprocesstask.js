import React from 'react';
import { link } from 'react-router-dom';
import style from './batchprocesstask.css';
const { Option } = Select;
import { Card, Form, Input, Select, Button, Table, Divider, Upload, Modal, Radio ,Icon } from 'antd';
import { Steps } from 'antd';
const {Search} = Input;
const Step = Steps.Step;
const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="创建A类文件"
          okText="保存"
          cancelText="创建B类文件"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="inline">
            <FormItem label="编号：">
              {getFieldDecorator('code', {
                rules: [{message: 'Please input the title of collection!' }],
              })(
                <Input/>
              )}
            </FormItem>
            <FormItem label="效率100编号: ">
             	{getFieldDecorator('efficient')(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="标题" className="collection-create-form_last-form-item">
             	{getFieldDecorator('title')(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="导入A类文件" className="collection-create-form_last-form-item">
             	{getFieldDecorator('Upload_file')(<Input type="textarea" />)}

            </FormItem>
            <FormItem label="创建时间" className="collection-create-form_last-form-item">
             	{getFieldDecorator('create_time')(<Input type="textarea" />)}

            </FormItem>
            <FormItem label="创建人" className="collection-create-form_last-form-item">
             	{getFieldDecorator('user')(<Input type="textarea" />)}

            </FormItem>
            <FormItem label="fenhang" className="collection-create-form_last-form-item">
             	{getFieldDecorator('fenhang')(<Input type="textarea" />)}

            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);



class BatchProcessTask extends React.Component{
	state={
		
	}

	columns = [{
	  title: '编号',
	  dataIndex: 'code',
	  key:'code',
	}, {
	  title: '效率100编号',
	  dataIndex: 'efficient',
	  key:'efficient',
	},{
		title:'标题',
		dataIndex:'title',
		key:'title'
	},{
		title:'创建人',
		dataIndex:'user',
		key:'user',
	},{
		title:'创建时间',
		dataIndex:'create_time',
		key:'create_time',
	},{
		title:'操作',
		key:'dealwith',
		render:() => (
			<div>
				<span>
				<a href=''>编辑</a>
				<a href=''>删除</a>
				<a href=''>查看详情</a>
				</span>
			</div>
		)
	}];

	render(){
		let getFieldDecorator = this.props.form.getFieldDecorator;	

		let rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = selectedRowKeys.join(',');
                if(!selectedRows.length){
                    this.setState({
                        couldUnFollow: false,
                        couldFollow: false,
                        task_ids: ''
                    })
                }else{
                    let follow = this.couldFollow(selectedRows);
                    let unfollow = this.couldUnFollow(selectedRows);
                    this.setState({
                        couldUnFollow: unfollow,
                        couldFollow: follow,
                        task_ids: ids
                    })
                }

            }
        };

		let SelectButton = () => (
			<Card className={style.card}>
				<Form layout='inline' className={style.search_form}>
					<Form.Item label='效率100编号'>
						{getFieldDecorator('efficient',{initialValue:0})
							(<Select className={style.status_select}>
                                    <Option value={0}>20180424</Option>
                                    <Option value={1}>20180425</Option>
                            </Select>)
						}
					</Form.Item>
					<Form.Item label='标题'>
						{getFieldDecorator('title',{initialValue:0})
							(<Select className={style.status_select}>
                                    <Option value={0}>关于用户优惠套餐</Option>
                                    <Option value={1}>关于用户调查</Option>
                            </Select>)
						}
					</Form.Item>
					<Form.Item label='创建人'>
						{getFieldDecorator('title',{initialValue:0})
							(<Select className={style.status_select}>
                                    <Option value={0}>张三</Option>
                                    <Option value={1}>李四</Option>
                            </Select>)
						}
					</Form.Item>
					<Form.Item>
						<Button onClick={this.handleQuery} type={'primary'} className={style.operate_btn}>查询</Button>
					</Form.Item>
					<Form.Item className={style.fr}>
							{getFieldDecorator('keyword',{initialValue:''})(
								<Search
									placeholder={'请输入其他关键词'}
									enterButton
									onSearch={this.handleQuery}
								/>
							)}

					</Form.Item>
				</Form>
				
					<div className={style.btn_group}>


					<div>

  						<Button type="primary" onClick={this.showModalSecond} className={style.operate_btn}>创建</Button>
        					<CollectionCreateForm
          						wrappedComponentRef={this.saveFormRef}
          						visible={this.state.visible}
          						onCancel={this.handleCancelSecond}
          						onCreate={this.handleCreate}
        					/>
      				</div>

						
						<Button className={style.operate_btn}>导出</Button>
					</div>
					
				
			</Card>
		) 
		
				return(
			<div>
		
					<SelectButton/>
					<Table 
					pagination={{showSizeChanger:true,hideOnSinglePage:true,defaultPageSize:10,pageSizeOptions:['10','20','50','100','200']}} 
					columns={this.columns} 
					rowSelection={rowSelection}
					
					dataSource={[this.state]} 
					

					/>
				
			</div>

			)
	}

  showModalSecond = () => {
    this.setState({ visible: true });
  }
  handleCancelSecond = () => {
    this.setState({ visible: false });
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    



    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      console.log(values);
     
      form.resetFields();
      

      this.setState({visible: false,
      	code:values.code,
      	efficient:values.efficient,
      	title:values.title,
      	user:values.user,
      	create_time:values.create_time,
       });
      
    });
    
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }


}




export default Form.create()(BatchProcessTask);
