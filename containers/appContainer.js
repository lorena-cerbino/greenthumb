import React from 'react';

import Filters from './filters';

import Header from '../components/header';

import logo from '../images/icons/logo-white.svg';
import arrow_down from '../images/icons/arrow-down.svg';

const styles = ({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	logo: {
		width: '40%',
		height: 'min(max(4vw, 16px),24px)',
		marginLeft: 'min(max(16vw, 40px), 200px)',
	},
	text_container: {
		display: 'flex',
		flexDirection: 'column',
		paddingTop: 60,
		width: '100%',
		maxWidth: '800px'
	},
	text: {
		color: 'white',
		fontSize: 'min(max(5vw, 30px), 70px)',
		fontFamily: 'Montserrat',
		marginLeft: 'min(max(16vw, 40px), 250px)',
		marginRight: '3vw',
	},
	arrow: {
		height: 'min(max(2.5vw, 20px), 60px)',
		width: '10%',
		marginLeft: 'min(max(16vw, 40px), 250px)',
		marginBottom: 40,
	},
});

const AppContainer = (props) => {
	return (
		<div style={styles.container}>
			<Header >
				<div style={styles.text_container}>
					<img style={styles.logo} src={logo} alt="greenthumb" />
					<h1 style={styles.text}>Find your next green friend</h1>
					<img style={styles.arrow} src={arrow_down} />
				</div>
			</Header>
			<Filters />
		</div>
	)
}

export default AppContainer;
