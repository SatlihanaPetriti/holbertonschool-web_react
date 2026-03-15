/* eslint-disable */
import closeIcon from "../assets/close-button.png";
import NotificationItem from './NotificationItem';
import './Notifications.css';

 const Notifications= ({ notifications = [], displayDrawer = false })=>{
    return (
        <>
            <div className='notifications-title'>Your notifications</div>
            {displayDrawer ? (<div className="notifications">
                <div>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {notifications.length > 0 ? ((notifications).map(notification => {
                            return (
                                <NotificationItem key={notification.id} type={notification.type} html={notification.html} value={notification.value} />
                            )
                        })) : <p>No new notification for now</p>}
                    </ul>
                </div>
                <button aria-label="Close" onClick={() => { console.log("Close button has been clicked") }} style={{ marginLeft: "auto", backgroundColor: "white", border: "none", height: "25px" }}>
                    <img alt="Close Button" src={closeIcon}></img>
                </button>
            </div>) : (null)}
        </>
    )
}
export default Notifications;