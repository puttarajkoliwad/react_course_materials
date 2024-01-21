import React from 'react';
import PropTypes from 'prop-types';
import './ConceptsCard.css';
import UnorderedList from '../../UnorderedList/UnorderedList';
import OrderedList from '../../OrderedList/OrderedList';
import Concept from '../../Concept/Concept';

const ConceptsCard = props => {
	const classList = 'concepts ' + props.className;
	const concepts = props.concepts;
	return(
		<div className={classList}>
			<UnorderedList>
				<OrderedList>
					{concepts.map(concept => <Concept title={concept.title} image={concept.image} description={concept.description}/>)}
				</OrderedList>
			</UnorderedList>
		</div>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class ConceptsCard extends React.Component {
//   render() {
//     return <div>This is a component called ConceptsCard.</div>;
//   }
// }

const ConceptsCardPropTypes = {
	// always use prop types!
};

ConceptsCard.propTypes = ConceptsCardPropTypes;

export default ConceptsCard;
