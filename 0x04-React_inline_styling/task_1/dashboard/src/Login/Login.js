import React from 'react';
import { StyleSheet,css } from 'aphrodite';


const styles = StyleSheet.create({
    "App-body" : {
        margin: "50px",
        height: "45%",
        overflow: "hidden"
    },
      
    input: {
        marginLeft: "10px"
    },

    button: {
        marginLeft: "10px"
    }
})

function Login(){
    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input  className={css(styles.input)} type="email" id="email" />
                <label htmlFor="password" style={{marginLeft:'15px'}}>Password:</label>
                <input  className={css(styles.input)} type="password" id="password" />
                <button className={css(styles.button)}>Ok</button>
            </div>
        </React.Fragment>
    )
}
export default Login;