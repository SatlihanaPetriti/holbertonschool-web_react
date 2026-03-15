/* eslint-disable */
/* eslint-disable */
import React from "react";

const NotificationItem = ({ type = "default", html, value }) => {
    const style = type === "urgent" ? { color: "red" } : { color: "blue" };

    if (value) {
        return (
            <li data-notification-type={type} style={style}>
                {value}
            </li>
        );
    }

    if (html) {
        return (
            <li
                data-notification-type={type}
                style={style}
                dangerouslySetInnerHTML={html}
            />
        );
    }

    return null;
};

export default NotificationItem;