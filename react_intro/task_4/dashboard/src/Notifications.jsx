import React from "react";
import closeIcon from "./assets/close-button.png";
import "./Notifications.css";

function Notifications() {
    return (
        <div className="notification-items">
            <button
                aria-label="Close"
                onClick={() => console.log("Close button has been clicked")}
                style={{ position: "absolute", right: "0" }}
            >
                <img src={closeIcon} alt="close" style={{ height: "30px", width: "30px" }} />
            </button>

            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority="default" className="blue">New course available</li>
                <li data-priority="urgent" className="red">New resume available</li>
                <li data-priority="urgent" className="red" >
                    <strong>Urgent requirement</strong> - complete by EOD
                </li>
            </ul>
        </div>
    );
}

export default Notifications;