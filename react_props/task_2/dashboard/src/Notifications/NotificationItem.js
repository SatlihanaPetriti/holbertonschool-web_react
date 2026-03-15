/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
    const style = {
        color: type === 'urgent' ? 'red' : 'blue'
    };

    if (html) {
        return (
            <li
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                style={style}
            ></li>
        );
    }

    return (
        <li
            data-notification-type={type}
            style={style}
        >
            {value}
        </li>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: ''
};

export default NotificationItem;