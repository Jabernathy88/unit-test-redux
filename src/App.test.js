import React from 'react';
import { connect } from 'react-redux'
import App from './App';
import { PostsList } from './components/PoststList'
import { fetchPosts } from './postActions';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props={}) => {
  const component = shallow(<PostsList {...props} />);
  return component;
};

it('runs a test', () => {
  expect(true).toBe(true)
});

describe('PostsList component', () => {
  let component;

  beforeEach(() => {
    component = setUp(); 
  });
 
  it('Should render without errors', () => {
    const wrapper = component.find('.posts-list-container')
    expect(wrapper.length).toBe(1);
  });
})
