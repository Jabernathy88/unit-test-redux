import React from 'react';
import { connect } from 'react-redux'
import App from './App';
import { PostsList } from './components/PoststList'
import { fetchPosts } from './postActions';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // here

Enzyme.configure({ adapter: new Adapter() });

it('runs a test', () => {
  expect(true).toBe(true)
});
