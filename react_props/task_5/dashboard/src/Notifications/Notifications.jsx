/* eslint-disable */

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
                    {notifications.length > 0 ? (
                        <p>Here is the list of notifications</p>
                    ) : (
                        <p>No new notification for now</p>
                    )}

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

                    {/* Only show close button if there are notifications */}
                    {notifications.length > 0 && (
                        <button
                            aria-label="Close"
                            onClick={() => console.log("Close button has been clicked")}
                            className="close-button"
                        >
                            <img alt="Close Button" src={closeIcon} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Notifications;