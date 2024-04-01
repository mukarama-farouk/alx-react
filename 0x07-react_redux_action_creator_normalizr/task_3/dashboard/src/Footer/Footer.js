import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

function Footer() {
    // Accessing context values
    const { user } = useContext(AppContext);

    return (
        <>
            <div className="App-footer">
                
                {user.isLoggedIn && ( // Display only when user is logged in
                    <p>
                        <a href="#">Contact us</a>
                    </p>
                )}
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </div>
        </>
    )
}
export default Footer;
