import React from 'react';
import holberton_logo from '../assets/Holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    "App-header" :{
        marginTop: "150px",
        display: "flex",
        alignItems: "center",
        color: "#e01d3f",
        fontSize: "20px",
        borderBottom: "3px solid #e01d3f",
        width: "100%"
      },
    
      img : {
        width: "200px"
      
      }
})

function Header() {
    return (
        <div className={css(styles['App-header'])}>
            <img src={holberton_logo}  className={css(styles.img)} alt="logo" />
            <h1>School dashboard</h1>
        </div>
    )
}
export default Header;