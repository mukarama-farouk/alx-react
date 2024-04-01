import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils';


export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button style={{
                position: 'absolute',
                top: '10px', // Adjust top position as needed
                right: '10px', // Adjust right position as needed
                backgroundColor: '#fff',
                border: 'none',
                cursor: 'pointer',

            }} aria-label='Close'>
            <img src={closeIcon}  height='10px' width='10px' alt='close'/>
            </button>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent"
                dangerouslySetInnerHTML={{
                __html: getLatestNotification(),
                }}></li>
            </ul>
        </div>
    )
}