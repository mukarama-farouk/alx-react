import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    "App-body": {
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

function Login({ logIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        logIn(email, password);
    }

    const handleChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (value && password) {
            setEnableSubmit(true);
        } else {
            setEnableSubmit(false);
        }
    }

    const handleChangePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
        if (value && email) {
            setEnableSubmit(true);
        } else {
            setEnableSubmit(false);
        }
    }

    return (
        <React.Fragment>
            <div className={css(styles['App-body'])}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        className={css(styles.input)}
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        className={css(styles.input)}
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                    <input
                        type='submit'
                        value="Ok"
                        disabled={!enableSubmit}
                    />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login;
