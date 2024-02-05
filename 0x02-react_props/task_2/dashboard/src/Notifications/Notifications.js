import React from 'react';
import '../Notifications/Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button style={{
                position: 'absolute',
                top: '5px', 
                right: '0', 
                backgroundColor: '#fff',
                border: 'none',
                cursor: 'pointer',

            }} aria-label='Close'>
            <img src={closeIcon}  height='10px' width='10px' alt='close'/>
            </button>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    )
}