/* eslint-disable */
import React from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

const Notifications = ({ notifications = [], displayDrawer = false }) => {
    return (
        <div className="notifications-container">
            {/* Always visible title */}
            <div className="notification-title">Your notifications</div>

            {/* Only render drawer if displayDrawer is true */}
            {displayDrawer && (
                <div className="notification-items">
                    {/* Message above the list */}
                    {notifications.length > 0 ? (
                        <p>Here is the list of notifications</p>
                    ) : (
                        <p>No new notification for now</p>
                    )}

                    {/* Notification list */}
                    {notifications.length > 0 && (
                        <ul>
                            {notifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    type={notification.type}
                                    html={notification.html}
                                    value={notification.value}
                                />
                            ))}
                        </ul>
                    )}

                    {/* Close button */}
                    <button
                        aria-label="Close"
                        onClick={() => console.log("Close button has been clicked")}
                        className="close-button"
                    >
                        <img alt="Close Button" src={closeIcon} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Notifications;