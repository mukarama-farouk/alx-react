import React from "react";
import holberton_logo from '../assets/Holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={holberton_logo} className={css(styles.img)} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
