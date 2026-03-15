/* eslint-disable */
import React from "react";

const NotificationItem = ({ type = "default", html, value }) => {
    const style = type === "urgent" ? { color: "red" } : { color: "blue" };

    if (value) {
        // Always render value first if it exists
        return (
            <li data-notification-type={type} style={style}>
                {value}
            </li>
        );
    }

    else if (html) {
        return (
            <li data-notification-type={type} style={style} dangerouslySetInnerHTML={html} />
        );
    }

    return null; 
};

export default NotificationItem;