/* eslint-disable */
import React, { Component } from 'react';
import closeIcon from "../assets/close-button.png";
import NotificationItem from './NotificationItem';
import './Notifications.css';

// export default function Notifications({ notifications = [], displayDrawer = false }) {
//   return (
//     <>
//       <div className='notifications-title'>Your notifications</div>
//       {displayDrawer ? (<div className="notifications">
//         <div>
//           <p>Here is the list of notifications</p>
//           <ul>
//             {notifications.length > 0 ? ((notifications).map(notification => {
//               return (
//                 <NotificationItem key={notification.id} type={notification.type} html={notification.html} value={notification.value} />
//               )
//             })) : <p>No new notification for now</p>}
//           </ul>
//         </div>
//         <button aria-label="Close" onClick={() => { console.log("Close button has been clicked") }} style={{ marginLeft: "auto", backgroundColor: "white", border: "none", height: "25px" }}>
//           <img alt="Close Button" src={closeIcon}></img>
//         </button>
//       </div>) : (null)}
//     </>
//   )
// }

class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    // Only re-render if notification list length changes
    shouldComponentUpdate(nextProps) {
        return nextProps.notifications.length !== this.props.notifications.length;
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        return (
            <>
                <div className='notifications-title'>Your notifications</div>
                {this.props.displayDrawer ? (
                    <div className="notifications">
                        <div>
                            <p>Here is the list of notifications</p>
                            <ul>
                                {this.props.notifications.length > 0 ? (
                                    this.props.notifications.map(notification => (
                                        <NotificationItem
                                            key={notification.id}
                                            id={notification.id}
                                            type={notification.type}
                                            html={notification.html}
                                            value={notification.value}
                                            markAsRead={this.markAsRead}
                                        />
                                    ))
                                ) : (
                                    <p>No new notification for now</p>
                                )}
                            </ul>
                        </div>
                        <button
                            aria-label="Close"
                            onClick={() => {
                                console.log("Close button has been clicked");
                            }}
                            style={{
                                marginLeft: "auto",
                                backgroundColor: "white",
                                border: "none",
                                height: "25px",
                            }}
                        >
                            <img alt="Close Button" src={closeIcon} />
                        </button>
                    </div>
                ) : null}
            </>
        );
    }
}

Notifications.defaultProps = {
    notifications: [],
    displayDrawer: false,
};

export default Notifications;