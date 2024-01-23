import React from 'react';
import PropTypes from 'prop-types';
import './UnorderedList.css';

const UnorderedList = props => {
	const classList = 'u-list ' + props.className;
	return(
		<ul className={classList}>{props.children}</ul>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class UnorderedList extends React.Component {
//   render() {
//     return <div>This is a component called UnorderedList.</div>;
//   }
// }

const UnorderedListPropTypes = {
	// always use prop types!
};

UnorderedList.propTypes = UnorderedListPropTypes;

export default UnorderedList;
