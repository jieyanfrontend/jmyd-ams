import React from 'react';
import { link } from 'react-router-dom';
import style from './detail.css';
const { Option } = Select;
import { Card, Form, Input, Select, Button, Table, Divider, Upload, Modal } from 'antd';
const {Search} = Input;
const Step = Steps.Step;
import { Steps } from 'antd';


class DetailShow extends React.Component{
	columns = [{
	  title: '编号',
	  dataIndex: 'code',
	},{
		title:'效率100编号',
		dataIndex:'efficient',
	},{
		title:'标题',
		dataIndex:'title',
	},{
		title:'创建人',
		dataIndex:'user',
	},{
		title:'创建时间',
		dataIndex:'create_time',
	},{
		title:'文件类型',
		dataIndex:'files_type',
	},{
		title:'备注',
		dataIndex:'remarks',
	},{
		title:'打开附件',
		dataIndex:'open_file',
	},{
		title:'操作',
		dataIndex:'dealwith',
		render:() => (
				<div>
					<span>
						<a href="">编辑</a>
						<a href="">删除</a>
					</span>
				</div>
			)
	}]
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
					<Form.Item>
						<Button type={'primary'} className={style.operate_btn}>返回</Button>
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
			
					<Form.Item label='文件类型'>
						{getFieldDecorator('efficient',{initialValue:0})
							(<Select className={style.status_select}>
                                    <Option value={0}>全部</Option>
                                    <Option value={1}>A类型文件</Option>
                                    <Option value={2}>B类型文件</Option>
                                    <Option value={3}>C类型文件</Option>
                                    <Option value={4}>D类型文件</Option>
                                    <Option value={5}>E类型文件</Option>
                            </Select>)
						}
					</Form.Item>
					<Form.Item>
						<Button onClick={this.handleQuery} type={'primary'} className={style.operate_btn}>选择</Button>
					</Form.Item>
			</Form>
				
					<div className={style.btn_group}>
	

						<div>
              				<Button className={style.operate_btn} type="primary" onClick={this.showModal}>创建B类文件</Button>
              			<Modal
               			title="创建A类文件"
          				okText="确定"
          				cancelText="取消"
          				visible={this.state.visible}
          				onOk={this.handleOk}
          				onCancel={this.handleCancel}
        			>
        
          			<Steps direction="vertical" current={0}>
            			<Step title="第一步" description={"效率100编号："+{}} status="process" />
            			<Step title="第二步" description={"操作类型:"+{} }/>
          			</Steps>

        							</Modal>
      							</div>
							
								<Button className={style.operate_btn}>导出</Button>

							</div>


			</Card>
		) 

		return(
				<div>
					<SelectButton/>
					<Table 
					pagination={{showSizeChanger:true,hideOnSinglePage:true,defaultPageSize:20,pageSizeOptions:['20','50','100','200']}} 
					columns={this.columns} 
					rowSelection={rowSelection}
					/>
				</div>
			)
	}



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


}
export default Form.create()(DetailShow);
