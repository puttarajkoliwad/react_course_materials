import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = props => {
	// const {keyConceptsImage, imgCardTitle, imgCardDescription} = props;
	const classList = 'header ' + props.className;
	return (
		<div className={classList}>
			{props.children}
		</div>
	)
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class Header extends React.Component {
//   render() {
//     return <div>This is a component called Header.</div>;
//   }
// }

const HeaderPropTypes = {
	// always use prop types!
};

Header.propTypes = HeaderPropTypes;

export default Header;
