import React from 'react';
import { StyleSheet,css } from 'aphrodite';


const styles = StyleSheet.create({
    "App-body" : {
        margin: "50px",
        height: "45%",
        overflow: "hidden",

        "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
          },
    },
      
    input: {
        margin: "15px"
    },

})

function Login(){
    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input  className={css(styles.input)} type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input  className={css(styles.input)} type="password" id="password" />
                <button >Ok</button>
            </div>
        </React.Fragment>
    )
}
export default Login;