import React from 'react';

const NotificationItem = ({ type, html, value }) => {
    const style = type === "default" ? { color: "blue" } : { color: "red" };

    if (value) {
        return (
            <li style={style} data-notification-type={type}>
                {value}
            </li>
        );
    } else if (html) {
        return (
            <li style={style} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    }

    return null;
};

export default NotificationItem;
