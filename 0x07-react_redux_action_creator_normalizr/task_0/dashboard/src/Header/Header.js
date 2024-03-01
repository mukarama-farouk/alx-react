import React, {useContext} from 'react';
import holberton_logo from '../assets/Holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from "../App/AppContext";


const styles = StyleSheet.create({
    "App-header" :{
        marginTop: "150px",
        display: "flex",
        color: "#e01d3f",
        fontSize: "20px",
        borderBottom: "3px solid #e01d3f",
        width: "100%"
      },
    
      img : {
        width: "200px"
      
      },
      greeting: {
        marginTop: "1rem",
      }
})

function Header() {
    const { user, logOut } = useContext(AppContext);

    return (
        <>
        <div className={css(styles['App-header'])}>
            <img src={holberton_logo}  className={css(styles.img)} alt="logo" />
            <h1>School dashboard</h1>
        </div>

        {user.isLoggedIn && (
        <section className={css(styles.greeting)} id="logoutSection">
          Welcome<strong> {user.email} </strong>
          <em>
            <a href="#" onClick={logOut}>
              (logout)
            </a>
          </em>
        </section>
      )}
        </>
    )
}
export default Header;