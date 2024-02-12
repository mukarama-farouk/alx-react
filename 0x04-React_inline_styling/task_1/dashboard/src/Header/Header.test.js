import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header component', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).toBe(true);
    });
  
    it('should render img and h1 tags', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h1')).toHaveLength(1);
    });
  });