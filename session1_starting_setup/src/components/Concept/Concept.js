import React from 'react';
import PropTypes from 'prop-types';
import './Concept.css';

const Concept = props => {
	const title = props.title;
	const description = props.description;
	const image = props.image;

	return(
		<div className='concept'>
			<img class='img' src={image} alt='TODO Title' />
			<h2 class='h2'>{title}</h2>
			<p class='p'>{description}</p>
		</div>
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
