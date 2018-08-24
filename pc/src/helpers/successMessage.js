import {Modal, message, notification} from 'antd';
import React from  'react'

const messageSuccess = (res) => {
    message.success(res.msg);
};

export default messageSuccess