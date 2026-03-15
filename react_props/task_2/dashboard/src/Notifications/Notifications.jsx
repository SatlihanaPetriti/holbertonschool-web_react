/* eslint-disable */
import './Notifications.css';
import close_icon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export const Notifications = ({ notifications }) => {
    return (
        <div className="Notifications">
            <button
                aria-label="Close"
                onClick={() => {
                    console.log('Close button has been clicked');
                }}
                style={{
                    float: 'right',
                    height: '25px',
                    width: '25px',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'none',
                    border: 'none',
                }}
            ><img
                    src={close_icon}
                    style={{
                        height: '20px',
                        width: '20px'
                    }} alt="Close" /></button>
            <p>Here is the list of notifications</p>
            <ul>
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                    />
                ))}
            </ul>
        </div>
    );
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.shape({
                __html: PropTypes.string
            })
        })
    )
};

Notifications.defaultProps = {
    notifications: []
};

export default Notifications;