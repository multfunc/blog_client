//notification
import {notification} from "antd";

export const openNotification = (message='',description='',placement='bottomRight') => {
    notification.info({
        message: `Notification：${message}`,
        description:description,
        placement,
    });
};
