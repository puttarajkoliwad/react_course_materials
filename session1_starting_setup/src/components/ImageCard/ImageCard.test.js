import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ImageCard from './ImageCard';

describe('ImageCard', () => {
  let props;
  let shallowImageCard;
  let renderedImageCard;
  let mountedImageCard;

  const shallowTestComponent = () => {
    if (!shallowImageCard) {
      shallowImageCard = shallow(<ImageCard {...props} />);
    }
    return shallowImageCard;
  };

  const renderTestComponent = () => {
    if (!renderedImageCard) {
      renderedImageCard = render(<ImageCard {...props} />);
    }
    return renderedImageCard;
  };

  const mountTestComponent = () => {
    if (!mountedImageCard) {
      mountedImageCard = mount(<ImageCard {...props} />);
    }
    return mountedImageCard;
  };  

  beforeEach(() => {
    props = {};
    shallowImageCard = undefined;
    renderedImageCard = undefined;
    mountedImageCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
