import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";



const opacityAnim = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounceAnim = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};


const styles = StyleSheet.create({
  Notifications :{
    border: "3px dotted #e01d3f",
    padding: "0 20px",
    top: "0",
    right: "0",
    zIndex: "999",
    fontWeight: "500",

    "@media (max-width:375px)" : {
      display: "flex",
      flexDirection: "column",
      fontSize: "20px",
      padding: "0",
      boxSizing: "border-box",
      border: "none",
      margin: "0"


    }
  },
  
  menuItem: {
    textAlign: "right",
    position: "relative",
    zIndex: 100,
    ":hover": {
      cursor: "pointer",
      animationName: [opacityAnim, bounceAnim],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    },
  },

  ul : {
    "@media (max-width:375px)" :{
      padding: "0"
    }
    
  },

  button: {
    color: "#3a3a3a",
      fontWeight: "bold",
      backgroundColor: "#dedede",
      border: "none",
      fontSize: "15px",
      position: "absolute",
      right: "3px",
      top: "3px",
      cursor: "pointer",
      outline: "none",
  },

  
  '[data-notification-type="default"]': {
    color: "#3a04cf"
  },
  
  '[data-urgent]' :{
    color: "#e01d3f"
  },
  
  '[data-notification-type="urgent"]': {
    color: "#e01d3f"
  }
  
})

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
		nextProps.length > this.props.listNotifications.length ||
		nextProps.displayDrawer !== this.props.displayDrawer
	)
	
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
		{!this.props.displayDrawer ?
          <div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}>
            Your notifications
          </div>
        :
          <div className={css(styles.Notifications)}>
            <button 
            aria-label="Close"
            className={css(styles.button)}
            onClick={(e) => {
              console.log('Close button has been clicked');
              this.props.handleHideDrawer();
            }}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {
              this.props.listNotifications.length != 0 ?
                <p>Here is the list of notifications</p>
              : null
            }
            <ul className={css(styles.ul)}>
              {
                this.props.listNotifications.length == 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                this.props.listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                  markAsRead={this.markAsRead}
                  id={val.id}
                />
                })
              }
            </ul>
          </div>
        }
  
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;