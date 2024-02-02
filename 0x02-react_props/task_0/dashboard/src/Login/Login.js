import React from 'react';
import "./Login.css";

function Login(){
    return (
        <React.Fragment>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password" style={{marginLeft:'15px'}}>Password:</label>
                <input type="password" id="password" />
                <button>Ok</button>
            </div>
        </React.Fragment>
    )
}
export default Login;