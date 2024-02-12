import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from "../BodySection/BodySection";
import PropTypes from "prop-types";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: listNotifications },
];

class App extends Component {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {} 
  };

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func 
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      logOut(); // Call the logOut function passed via props
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className="App">
          <Header />

          <BodySectionWithMarginBottom title="Course list">
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : null}
          </BodySectionWithMarginBottom>

          <BodySectionWithMarginBottom title="Log in to continue">
            {!isLoggedIn ? <Login /> : null}
          </BodySectionWithMarginBottom>

          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tellus eu nulla ultricies suscipit.</p>
          </BodySection>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
