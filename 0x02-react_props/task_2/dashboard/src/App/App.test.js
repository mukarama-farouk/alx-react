import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Notifications />)).toBe(true);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it("should not render CourseList component when isLoggedIn is false", () => {
    const component = shallow(<App isLoggedIn={false} />); // Pass isLoggedIn prop as false

    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("should render CourseList component when isLoggedIn is true", () => {
    const component = shallow(<App isLoggedIn={true} />); // Pass isLoggedIn prop as true

    expect(component.contains(<CourseList />)).toBe(true);
  });
});