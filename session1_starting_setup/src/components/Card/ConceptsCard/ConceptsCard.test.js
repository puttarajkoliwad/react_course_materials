import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ConceptsCard from './ConceptsCard';

describe('ConceptsCard', () => {
  let props;
  let shallowConceptsCard;
  let renderedConceptsCard;
  let mountedConceptsCard;

  const shallowTestComponent = () => {
    if (!shallowConceptsCard) {
      shallowConceptsCard = shallow(<ConceptsCard {...props} />);
    }
    return shallowConceptsCard;
  };

  const renderTestComponent = () => {
    if (!renderedConceptsCard) {
      renderedConceptsCard = render(<ConceptsCard {...props} />);
    }
    return renderedConceptsCard;
  };

  const mountTestComponent = () => {
    if (!mountedConceptsCard) {
      mountedConceptsCard = mount(<ConceptsCard {...props} />);
    }
    return mountedConceptsCard;
  };  

  beforeEach(() => {
    props = {};
    shallowConceptsCard = undefined;
    renderedConceptsCard = undefined;
    mountedConceptsCard = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
