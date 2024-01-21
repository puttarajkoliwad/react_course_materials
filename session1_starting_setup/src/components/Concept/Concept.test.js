import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Concept from './Concept';

describe('Concept', () => {
  let props;
  let shallowConcept;
  let renderedConcept;
  let mountedConcept;

  const shallowTestComponent = () => {
    if (!shallowConcept) {
      shallowConcept = shallow(<Concept {...props} />);
    }
    return shallowConcept;
  };

  const renderTestComponent = () => {
    if (!renderedConcept) {
      renderedConcept = render(<Concept {...props} />);
    }
    return renderedConcept;
  };

  const mountTestComponent = () => {
    if (!mountedConcept) {
      mountedConcept = mount(<Concept {...props} />);
    }
    return mountedConcept;
  };  

  beforeEach(() => {
    props = {};
    shallowConcept = undefined;
    renderedConcept = undefined;
    mountedConcept = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
