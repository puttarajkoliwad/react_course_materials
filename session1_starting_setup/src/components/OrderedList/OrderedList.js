import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderedList.css';

const OrderedList = props => {
	const classList = 'list ' + props.className;
	return (
		<li className={classList}>{props.children}</li>
	)
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class OrderedList extends React.Component {
//   render() {
//     return <div>This is a component called OrderedList.</div>;
//   }
// }

const OrderedListPropTypes = {
	// always use prop types!
};

OrderedList.propTypes = OrderedListPropTypes;

export default OrderedList;
