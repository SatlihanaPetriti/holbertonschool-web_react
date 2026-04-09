
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

function Notifications({
    notifications = [],
    displayDrawer = false,
    handleDisplayDrawer,
    handleHideDrawer,
}) {
    const markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    return (
        <div className="notifications-container">
            <div
                className="notification-title"
                onClick={handleDisplayDrawer}
            >
                Your notifications
            </div>

            {displayDrawer && (
                <div className="notification-items">
                    {notifications.length > 0 ? (
                        <>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {notifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        html={notification.html}
                                        value={notification.value}
                                        markAsRead={markAsRead}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                        <p>No new notification for now</p>
                    )}

                    <button
                        aria-label="Close"
                        onClick={handleHideDrawer}
                        className="close-button"
                    >
                        <img alt="Close Button" src={closeIcon} />
                    </button>
                </div>
            )}
        </div>
    );
}

function areEqual(prevProps, nextProps) {
    if (prevProps.displayDrawer !== nextProps.displayDrawer) return false;

    if (prevProps.notifications.length !== nextProps.notifications.length)
        return false;

    return true;
}

export default React.memo(Notifications, areEqual);