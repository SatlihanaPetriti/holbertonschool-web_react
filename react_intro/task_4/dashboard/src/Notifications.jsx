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
                <li className="default" data-priority="default">
                    New course available
                </li>

                <li className="urgent" data-priority="urgent">
                    New resume available
                </li>

                <li className="urgent" data-priority="urgent">
                    <strong>Urgent requirement</strong> - complete by EOD
                </li>
            </ul>
        </div>
    );
}

export default Notifications;