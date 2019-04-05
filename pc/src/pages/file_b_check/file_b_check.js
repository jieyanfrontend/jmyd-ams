import React, { Component } from 'react';
import { Modal, Form, Input, Select, Table, Radio, Button, Spin, Icon, Upload, notification } from 'antd';
import { observer } from 'mobx-react';
import store from './store';
import store2 from '../process/store';
import hasErrors from '../../helpers/has-errors';
import request from '../../helpers/request';
import messageSuccess from '../../helpers/successMessage';
import commonFormProps from "../../config/common-form";
let { TextArea } = Input;
let Option = Select.Option;
let RadioGroup = Radio.Group;
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
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

@observer
class CreateFileBCheck extends Component {
    state = {
        fileList: []
    };
    uploadProps = {
        onChange: ({ fileList }) => {
            this.setState({
                fileList
            })
        },
        beforeUpload: () => false,
        onRemove: () => {
            this.props.form.setFieldsValue({
                file: null
            });
            this.setState({
                fileList: []
            }, () => {
                this.props.form.validateFields();
            })
        }
    };
    handleRadioChange = (e, record) => {
        console.log(e);
    };
    allTypes = {
        批开停开机: {
            operation_type: 1,
            dataSource: [
                {
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
        批量密码重置: {
            operation_type: 2,
            dataSource: [
                {
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
        批量主题产品转换: {
            operation_type: 3,
            dataSource: [
                {
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
        批量HLR重置业务: {
            operation_type: 4,
            dataSource: [
                {
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
        批量实名登记: {
            operation_type: 5,
            dataSource: [
                {
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
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
                output: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
            },
        },
        批量更改客户资料: {
            operation_type: 6,
            dataSource: [
                {
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
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
                output: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
            },
        },
        批量订单回退: {
            operation_type: 7,
            dataSource: [
                {
                    order: 1,
                    field: '订单编号',
                    input_format: '订单编号',
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
                    order: 2,
                    field: '回退原因',
                    input_format: '',
                    output_format: (e, record) => {
                        let { getFieldDecorator, getFieldsValue } = this.props.form;
                        let { inputValue } = store;
                        let values = getFieldsValue();
                        console.log(values);
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    initialValue: '余额不足',
                                    valuePropName: 'defaultValue',
                                })(
                                    <RadioGroup name="content" >
                                        <Radio value={'余额不足'}>余额不足</Radio>
                                        <Radio value={2}>
                                            其他
                                            {
                                                values.word2 === 2 ? <Input
                                                    placeholder="其他"
                                                    style={{ width: 85, marginLeft: '10px' }}
                                                    onChange={e => {
                                                        store.setInputValue({
                                                            word2Input: e.target.value
                                                        });
                                                    }}
                                                /> : null
                                            }
                                        </Radio>
                                    </RadioGroup>
                                )}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '00012345678',
                output: '00012345678|余额不足',
            },
        },
        批量产品订购退订与变更: {
            operation_type: 8,
            dataSource: [
                {
                    order: 1,
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
                    order: 2,
                    field: '备注',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    valuePropName: 'defaultValue',
                                    initialValue: '优惠已到期'
                                })(
                                    <RadioGroup name="批量产品订购退订与变更">
                                        <Radio value="优惠已到期">优惠已到期</Radio>
                                        <Radio value={2}>
                                            其他
                                            {
                                                this.props.form.getFieldsValue().word2 === 2 ? <Input
                                                    placeholder="其他"
                                                    style={{ width: 85 }}
                                                    onInput={e => store.setInputValue({ word2Input: e.target.value })}
                                                /> : null
                                            }
                                        </Radio>
                                    </RadioGroup>
                                )}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678|优惠已到期',
            },
        },
        批量密码重置_指定密码: {
            operation_type: 9,
            dataSource: [
                {
                    order: 1,
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
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678|000000',
            },
        },
        批量产品订购退订: {
            operation_type: 10,
            dataSource: [
                {
                    order: 1,
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
                    order: 2,
                    field: '增值产品代码',
                    input_format: '增值产品代码',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    initialValue: '',
                                })(<span>按A类文件“产品ID”</span>)}
                            </div>
                        );
                    },
                },
                {
                    order: 3,
                    field: '生效方式/代码',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word3', {
                                    valuePropName: 'defaultValue',
                                    initialValue: '0'
                                })(
                                    <RadioGroup name="生效方式/代码">
                                        <Radio value="0">0</Radio>
                                        <Radio value={3}>其他
                                            {
                                                this.props.form.getFieldsValue().word3 === 3 ? <Input
                                                    placeholder="其他"
                                                    style={{ width: 85 }}
                                                    onInput={e => store.setInputValue({ word3Input: e.target.value })}
                                                /> : null
                                            }
                                        </Radio>
                                    </RadioGroup>
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 4,
                    field: '操作类型代码',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word4', {
                                    valuePropName: 'defaultValue',
                                    initialValue: 'N'
                                })(
                                    <RadioGroup name="操作类型代码" >
                                        <Radio value={"N"}>N</Radio>
                                        <Radio value={4}>
                                            其他
                                            {
                                                this.props.form.getFieldsValue().word4 === 4 ? <Input
                                                    placeholder="其他"
                                                    style={{ width: 85 }}
                                                    onInput={e => store.setInputValue({ word4Input: e.target.value })}
                                                /> : null
                                            }
                                        </Radio>
                                    </RadioGroup>
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 5,
                    field: '备注',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word5', {
                                    initialValue: '',
                                })(<TextArea row={2}
                                    onChange={e => store.setInputValue({ word5Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 6,
                    field: '附加属性编码',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {/*{getFieldDecorator('word6', {})(
                  <RadioGroup name="附加属性编码" initialValue={''}>
                    <Radio value="">无</Radio>
                    <Radio value={inputValue}>
                      <Input
                        placeholder="其他"
                        style={{ width: 85 }}
                        onInput={e => store.setInputValue(e.target.value)}
                      />
                    </Radio>
                  </RadioGroup>
                )}*/}
                                {getFieldDecorator('word6', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word6Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678|JYPT750.180112823084.0',
                output:
                    '13912345678|JYPT750.180112823084.0|0|N|20188642吴振明18年一季度流量（存量）营销优惠活动2月外呼套餐迁转及升级|空',
            },
        },
        批量多层产品订购退订: {
            operation_type: 11,
            dataSource: [
                {
                    order: 1,
                    field: '客户号码',
                    input_format: '客户号码',
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
                    order: 2,
                    field: '用户主体产品ID',
                    input_format: '用户主体产品ID',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    initialValue: '',
                                })(<Input
                                    placeholder="id"
                                    style={{ width: 85 }}
                                    onInput={e => store.setInputValue({ word2Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 3,
                    field: '产品结构描述',
                    input_format: '产品结构描述',
                    output_format: () => {
                        let { getFieldDecorator, getFieldsValue } = this.props.form;
                        let values = getFieldsValue();
                        console.log(values);
                        let { word2 } = values
                        return (
                            <div>
                                {getFieldDecorator('word3', {
                                    initialValue: '',
                                })(<span>按A类文件“产品ID”</span>)}
                            </div>
                        );
                    },
                },
                {
                    order: 4,
                    field: '缴费方式',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word4', {
                                    valuePropName: 'defaultValue',
                                    initialValue: 'cash'
                                })(
                                    <RadioGroup name="缴费方式">
                                        <Radio value="cash">cash</Radio>
                                        <Radio value={4}>
                                            其他
                                            {
                                                this.props.form.getFieldsValue().word4 === 4 ? <Input
                                                    placeholder="其他"
                                                    style={{ width: 85 }}
                                                    onInput={e => store.setInputValue({ word4Input: e.target.value })}
                                                /> : null
                                            }
                                        </Radio>
                                    </RadioGroup>
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 5,
                    field: 'POS流水号',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word5', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word5Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 6,
                    field: '开户银行',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word6', {})(
                                    <Input
                                        style={{ width: 85 }}
                                        onChange={e => store.setInputValue({ word6Input: e.target.value })}
                                    />
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 7,
                    field: '支票号',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word7', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word7Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 8,
                    field: '实际收取金额',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word8', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word8Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 9,
                    field: '备注',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word9', {
                                    initialValue: '',
                                })(<TextArea row={2}
                                    onChange={e => store.setInputValue({ word9Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678|JYPT750.180112822084.0',
                output: '13912345678|JYPT750.180112823084.0|Cash||||0|',
            },
        },
        批量账户变更: {
            operation_type: 12,
            dataSource: [
                {
                    order: 1,
                    field: '手机号码',
                    input_format: '手机号码',
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
                    order: 2,
                    field: '帐本科目标识',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    initialValue: '',
                                })(<Input
                                    placeholder="id"
                                    style={{ width: 85 }}
                                    onInput={e => store.setInputValue({ word2Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 3,
                    field: '变更金额',
                    input_format: '变更金额',
                    output_format: () => {
                        let { getFieldDecorator, getFieldsValue } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word3', {
                                    initialValue: '',
                                })(<span>按A类文件含金额字段</span>)}
                            </div>
                        );
                    },
                },
                {
                    order: 4,
                    field: '是否进帐本科目明细',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word4', {
                                    initialValue: ''
                                })(
                                    <Input
                                        onChange={e => store.setInputValue({ word4Input: e.target.value })}
                                    />
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 5,
                    field: '生效时间',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word5', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word5Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 6,
                    field: '失效时间',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word6', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word6Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13544977339|1000',
                output: '13544977339|2|10.00|0|20180101|20370101|',
            },
        },
        批量积分修正: {
            operation_type: 13,
            dataSource: [
                {
                    order: 1,
                    field: '手机号码',
                    input_format: '手机号码',
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
                    order: 2,
                    field: '帐务周期',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word2', {
                                    initialValue: '',
                                })(<Input
                                    style={{ width: 85 }}
                                    onInput={e => store.setInputValue({ word2Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 3,
                    field: '积分类型',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator, getFieldsValue } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word3', {
                                    initialValue: '',
                                })(<Input
                                    style={{ width: 85 }}
                                    onInput={e => store.setInputValue({ word3Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 4,
                    field: '调整积分',
                    input_format: '调整积分',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word4', {
                                    initialValue: ''
                                })(
                                    <span>按A类文件含金额字段</span>
                                )}
                            </div>
                        );
                    },
                },
                {
                    order: 5,
                    field: '修正类型',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        return (
                            <div>
                                {getFieldDecorator('word5', {
                                    initialValue: '',
                                })(<Input
                                    onChange={e => store.setInputValue({ word5Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
                {
                    order: 6,
                    field: '备注',
                    input_format: '-',
                    output_format: () => {
                        let { getFieldDecorator } = this.props.form;
                        let { inputValue } = store;
                        return (
                            <div>
                                {getFieldDecorator('word6', {
                                    initialValue: '',
                                })(<TextArea row={2}
                                    onChange={e => store.setInputValue({ word6Input: e.target.value })}
                                />)}
                            </div>
                        );
                    },
                },
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13544977339|100',
                output: '13702249646|20150200|3|-10|1|测试积分批量调整方案|',
            },
        },
        批量APP卡券: {
            operation_type: 14,
            dataSource: [
                {
                    order: 1,
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
        批量流量汇: {
            operation_type: 15,
            dataSource: [
                {
                    order: 1,
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
            ],
            columns: [
                {
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
                },
            ],
            example: {
                input: '13912345678',
                output: '13912345678',
            },
        },
    };
    render() {
        let { visible, setVisible, wf_id, form } = this.props;
        let { fileList } = this.state;
        let allTypes = this.allTypes;
        let { getFieldDecorator, getFieldsValue, getFieldValue, getFieldError, getFieldsError, isFieldTouched } = form;
        let fileErr = isFieldTouched('file') && getFieldError('file');
        let fileBCheckVisible = visible.file_b_check;
        let { type, isDisabledBtn } = store;
        let { dataSource, columns, example = {} } = allTypes[type];
        let ModalFooter = () => (
            <React.Fragment>
                <Button onClick={() => this.closeModal()}>取消</Button>
                <Button type="primary" disabled={isDisabledBtn} onClick={() => this.createB()}>
                    确认
                </Button>
            </React.Fragment>
        );
        return (
            <Modal
                visible={fileBCheckVisible}
                title="创建B类比对文件"
                footer={<ModalFooter />}
                onCancel={() => this.closeModal()}
                width={800}
                destroyOnClose={true}>
                <Spin spinning={store.loading} indicator={antIcon}>
                    <Form>
                        <Form.Item label="效率100编号" {...formProps}>
                            <Input disabled={true} defaultValue={wf_id} />
                        </Form.Item>
                        <Form.Item
                            help={fileErr ? fileErr : ''}
                            validateStatus={fileErr ? 'error' : ''}
                            label='导入A类文件' {...commonFormProps}>{
                                getFieldDecorator('file', {
                                    rules: [{
                                        required: true,
                                        message: '请选择文件导入'
                                    }]
                                })(
                                    <Upload {...this.uploadProps} fileList={fileList}>
                                        <Button>
                                            <Icon type="upload" />选择文件
                                    </Button>
                                    </Upload>
                                )
                            }</Form.Item>
                        <Form.Item label="操作类型" {...formProps}>
                            <Select defaultValue={type} onChange={this.changeSelectType} dropdownStyle={{ zIndex: 1000 }}>
                                {Object.keys(allTypes).map(type => (
                                    <Option value={type} key={type}>
                                        {type}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item label="输出格式" {...formProps}>
                            <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="order" size={'small'} />
                        </Form.Item>
                        <Form.Item label="输入示例" {...formProps}>
                            {example.input}
                        </Form.Item>
                        <Form.Item label="输出示例" {...formProps}>
                            {example.output}
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        );
    }
    changeSelectType = value => {
        store.changeType(value);
        store.word2Input = '';
        store.word3Input = '';
        store.word4Input = '';
    };
    createB = () => {
        let { getFieldsValue, getFieldsError } = this.props.form;
        let canCreate = !hasErrors(getFieldsError());
        let allTypes = this.allTypes;
        let values = getFieldsValue();
        let { word1, word2, word3, word4, word5, word6, word7, word8, word9, file } = values;
        let { inputValue } = store;
        let { word1Input, word2Input, word3Input, word4Input, word5Input, word6Input, word7Input, word8Input, word9Input } = inputValue;
        let type = store.type;
        let operation_type = allTypes[type].operation_type;
        let { dataSource } = allTypes[type];
        let id = this.props.id;
        if (!file) {
            alert('请选择上传文件')
        } else {
            if (canCreate && file !== undefined) {
                let that = this;
                store.setLoading(true);
                store.changeBtn(true);
                console.log(file);
                request({
                    url: '/api/create_file_b_contrast',
                    data: {
                        operation_type,
                        id,
                        file: file.file,
                        word1: word1 ? word1 : "",
                        word2: word2 === 2 ? word2Input : word2,
                        word3: word3 === 3 ? word3Input : word3,
                        word4: word4 === 4 ? word4Input : word4,
                        word5: word5 ? word5 : "",
                        word6: word6 ? word6 : "",
                        word7: word7 ? word7 : "",
                        word8: word8 ? word8 : "",
                        word9: word9 ? word9 : "",
                    },
                    postType: 'formdata',
                    success: res => {
                        this.props.setVisible(false);
                        messageSuccess(res);
                        that.fetchProcessList();
                    },
                    fail: res => {
                        // this.warning(res);
                        this.props.setVisible(false);
                    },
                    complete: () => {
                        store.changeBtn(false);
                        store.setLoading(false);
                        this.props.form.setFieldsValue({
                            file: null
                        });
                        this.setState({
                            fileList: []
                        }, () => {
                            this.props.form.validateFields();
                        })
                    }
                });
            }

        }
    };
    fetchProcessList = () => {
        request({
            url: '/api/get_file_list',
            data: {
                id: this.props.id,
                keyword: '',
                file_type: '',
            },
            success: ({ table }) => {
                store2.setProcessList(table);
            },
        });
    };
    closeModal = () => {
        this.props.setVisible(false);
        this.props.form.setFieldsValue({
            file: null
        });
        this.setState({
            fileList: []
        }, () => {
            this.props.form.validateFields();
        })
    };
    openNotification = (type) => {
        notification[type]({
            message: '操作提示',
            description: '已存在该类文件，请确认无误后操作'
        })
    }
    warning = (res) => {
        Modal.warning({
            title: '警告',
            content: res.msg
        })
    }
}
export default Form.create()(CreateFileBCheck);
