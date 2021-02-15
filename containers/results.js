import React, { Component } from 'react';

import NoResults from '../components/noResults';

const styles = ({
	container: {
		display: 'flex',
		backgroundColor: '#f2f2f2',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	text_container: {
		display: 'flex',
		flexDirection: 'column',
		padding: '50px 100px',
	},
	image_container: {
		display: 'flex',
		justifyContent: 'center',
		padding: 50,
		width: '30%',
	},
	title: {
		color: '#a9a9a9',
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		lineHeight: '55px',
		fontSize: '45px'
	},
	text: {
		color: '#a9a9a9',
		fontFamily: 'Montserrat',
		fontWeight: 'normal',
		lineHeight: '27px',
		fontSize: '16px',
		maxWidth: '300px',
	},
});

class Results extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NoResults />
		);
	}
}

export default Results;
