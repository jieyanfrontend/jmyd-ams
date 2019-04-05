import Mock from 'mockjs'
Mock.mock('/api/get_flow_list', function (option) {
    return Mock.mock({
        'code': 200,
        'msg': "获取成功",
        'data|1-10': [{
            'id': '@guid',
            'wf_id': '@date("yyyyMMdd")',
            'title': "关于用户优惠套餐",
            'creator|1': [
                '陈二',
                '张三',
                '李四',
                '王五',
            ],
            'create_time': '@now("yyyy-MM-dd HH:mm:ss.SS")'
        }]})
})
Mock.mock('/api/create_flow', function (option) {
    return Mock.mock({
        'code': 200,
        'msg': "新增成功",
        'data':{}
    })
})
Mock.mock('/api/import_file',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "导入成功",
        'data': {}
    })
})
Mock.mock('/api/get_file_list', function(option){
    return Mock.mock({ 'code': 200,
        'msg': "获取成功",
        'data|1-10': [{
            'wf_id': '@date("yyyyMMdd")',
            'file_id': 'A@date("yyyyMMdd")001',
            'title': "关于用户优惠套餐",
            'creator|1': [
                '陈二',
                '张三',
                '李四',
                '王五',
            ],
            'create_time': '@now("yyyy-MM-dd HH:mm:ss.SS")',
            'file_type|0-5': 1,
            'remark': "",
            'file_name': 'A@date("yyyyMMdd")001.txt'
        }]})
})
Mock.mock('/api/get_task_list', function(option){
    return Mock.mock({ 'code': 200,
        'msg': "获取成功",
        'table|1-10': [{
            'id|0-10': 1,
            'file_id': 'A@date("yyyyMMdd")001',
            'task_type_name': '事件单',
            'task_name': '提交A文件',
            'title': "关于用户优惠套餐",
            'creator|1': [
                '陈二',
                '张三',
                '李四',
                '王五',
            ],
            'finish_time': '@now("yyyy-MM-dd HH:mm:ss.SS")',
            'file_type|0-5': 1,
            'remark': "",
            'current_state': '未完成',
            'file_name': 'A@date("yyyyMMdd")001.txt'
        }]})
})
Mock.mock('/api/create_file_c',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "创建成功",
    })
})
Mock.mock('/api/create_file_b',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "创建成功",
    })
})
Mock.mock('/api/create_file_e',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "创建成功",
    })
})
Mock.mock('/api/alert_flow', function(option){
    return Mock.mock({
            'code': 200,
            'msg': "修改成功",
    })
})
Mock.mock('/api/delete_flow',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "删除成功",
    })
})
Mock.mock('/api/partition_file_b',function(option){
    return Mock.mock({
        'code': 200,
        'msg': "分割成功",
    })
})