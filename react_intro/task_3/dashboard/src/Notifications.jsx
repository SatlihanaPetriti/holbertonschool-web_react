import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './assets/close-button.png';

export const Notification = () => {
  return (
    <div className='Notifications'>

      <p>Here is the list of notifications</p>

      <button style={{
        float: 'right',
        position: "relative",
        top: '-40px',
        background: 'transparent',
        border: 'none'
      }}
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}>
        <img src={closeIcon} alt="close-icon" style={{ height: '20px', width: '20px' }} />
      </button>

      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        {/* https://reactjs.org/docs/dom-elements.html */}
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
};

export default Notification;