import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

function NotificationItem({ type, html, value }) {
    return (
        <>
            {type && value && <li data-notification-type={type}>{value}</li>}
            {html && <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>}
        </>
    );
}

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    __html: PropTypes.shape({
    html: PropTypes.string,
    }),
};

export default NotificationItem;
