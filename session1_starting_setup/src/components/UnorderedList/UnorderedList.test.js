import React from 'react';
import { shallow, render, mount } from 'enzyme';
import UnorderedList from './UnorderedList';

describe('UnorderedList', () => {
  let props;
  let shallowUnorderedList;
  let renderedUnorderedList;
  let mountedUnorderedList;

  const shallowTestComponent = () => {
    if (!shallowUnorderedList) {
      shallowUnorderedList = shallow(<UnorderedList {...props} />);
    }
    return shallowUnorderedList;
  };

  const renderTestComponent = () => {
    if (!renderedUnorderedList) {
      renderedUnorderedList = render(<UnorderedList {...props} />);
    }
    return renderedUnorderedList;
  };

  const mountTestComponent = () => {
    if (!mountedUnorderedList) {
      mountedUnorderedList = mount(<UnorderedList {...props} />);
    }
    return mountedUnorderedList;
  };  

  beforeEach(() => {
    props = {};
    shallowUnorderedList = undefined;
    renderedUnorderedList = undefined;
    mountedUnorderedList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
