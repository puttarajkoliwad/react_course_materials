import React from 'react';
import PropTypes from 'prop-types';
import './Concept.css';

const Concept = props => {
	const {title, description, image} = props;

	return(
		<li className='concept'>
			<img src={image} alt='TODO Title' />
			<h2>{title}</h2>
			<p>{description}</p>
		</li>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Concept extends React.Component {
//   render() {
//     return <div>This is a component called Concept.</div>;
//   }
// }

const ConceptPropTypes = {
	// always use prop types!
};

Concept.propTypes = ConceptPropTypes;

export default Concept;
