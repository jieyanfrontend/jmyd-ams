//next version
import { notification } from 'antd';
let createNotification = async () => {
    let noti = notification;
    if(window.Notification){
        window.Notification.requestPermission().then((result) => {
            if(result === 'granted'){

            }else{
                noti = notification;
            }
        });
    }
};
export default createNotification();