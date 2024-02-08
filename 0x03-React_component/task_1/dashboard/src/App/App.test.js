/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";



describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });
  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });
  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true);
  });
  it("should render Footer Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLogedIn: false });

    expect(component.contains(<CourseList />)).toBe(false);
  });
  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
    expect(component.contains(<Login />)).toBe(false);
  });
});

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe("Keyboard events", () => {
  let mockLogOut;
  let wrapper;

  beforeEach(() => {
    mockLogOut = jest.fn();
    wrapper = mount(<App logOut={mockLogOut} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("calls logOut function when ctrl+h are pressed", () => {
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(mockLogOut).toHaveBeenCalled();
  });

  it("calls alert with the correct message when ctrl+h are pressed", () => {
    const spyAlert = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);
    expect(spyAlert).toHaveBeenCalledWith("Logging you out");
    spyAlert.mockRestore();
  });

  it("removes event listener on componentWillUnmount", () => {
    wrapper.unmount();
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    const spyLogOut = jest.spyOn(mockLogOut);
    document.dispatchEvent(event);
    expect(spyLogOut).not.toHaveBeenCalled();
  });
});
