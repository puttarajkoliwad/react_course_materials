import React from 'react';
import { shallow, render, mount } from 'enzyme';
import OrderedList from './OrderedList';

describe('OrderedList', () => {
  let props;
  let shallowOrderedList;
  let renderedOrderedList;
  let mountedOrderedList;

  const shallowTestComponent = () => {
    if (!shallowOrderedList) {
      shallowOrderedList = shallow(<OrderedList {...props} />);
    }
    return shallowOrderedList;
  };

  const renderTestComponent = () => {
    if (!renderedOrderedList) {
      renderedOrderedList = render(<OrderedList {...props} />);
    }
    return renderedOrderedList;
  };

  const mountTestComponent = () => {
    if (!mountedOrderedList) {
      mountedOrderedList = mount(<OrderedList {...props} />);
    }
    return mountedOrderedList;
  };  

  beforeEach(() => {
    props = {};
    shallowOrderedList = undefined;
    renderedOrderedList = undefined;
    mountedOrderedList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
