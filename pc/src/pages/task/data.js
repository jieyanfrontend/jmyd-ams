import moment from 'moment';

export default [{
    id: 1,
    task_name: '提交A文件',
    task_type: '事务件',
    finish_time: moment().format('YYYY-MM-DD HH:ss'),
    current_status: '超时',
    finish_status: '已完成',
    follow_status: '跟踪中'
}]