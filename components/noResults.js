import React from 'react';

import no_results from '../images/illustrations/no-results.png';

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

const NoResults = (props) => {
	let { style } = props;
	return (
		<div style={{ ...styles.container, ...style }}>
			<div style={styles.text_container}>
				<h1 style={styles.title}>No results yet...</h1>
				<p style={styles.text}>
					Use the filters above to find the plant that best fits your environment :)
				</p>
			</div>
			<div style={styles.image_container}>
				<img src={no_results} style={styles.img} alt={'no results'} />
			</div>
		</div>
	);
};

export default NoResults;
