import React from 'react';
import PropTypes from 'prop-types';
import './ImageCard.css';

const ImageCard = props => {
	const title = props.title;
	const description = props.description;
	const keyConceptsImage = props.keyConceptsImage;
	
	return(
		<>
			<img src={keyConceptsImage} alt='image title' />
			<h2>{title}</h2>
			<p>{description}</p>
		</>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ImageCard extends React.Component {
//   render() {
//     return <div>This is a component called ImageCard.</div>;
//   }
// }

const ImageCardPropTypes = {
	// always use prop types!
};

ImageCard.propTypes = ImageCardPropTypes;

export default ImageCard;
