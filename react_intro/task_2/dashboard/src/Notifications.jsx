import './Notifications.css';
import close from './assets/close-button.png';
import { getLatestNotification } from './utils';

const Notification = () => {
  return (
    <div className="notification-items">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>

      <button
        aria-label="Close"
      >
        <img src={close} alt="close icon" />
      </button>
    </div>
  );
};

export default Notification;