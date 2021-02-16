import React from 'react';

import SelectInput from './selectInput';

const styles = ({
	card: {
		alignItems: 'flex-start',
		width: '70%',
		maxWidth: '360px',
		padding: 6,
	},
	icon: {
		width: 'auto',
		// maxWidth: '75px',
		height: 'min(max(5vw, 60px), 65px)',
		objectFit: 'contain',
		marginBottom: 10,
	},
	text: {
		fontFamily: 'Montserrat',
		color: '#a8a8a8',
		minHeight: '120px',
		fontSize: 'min(max(1.2vw, 22px), 28px)',
	},
});

const SelectCard = (props) => {
	let { option, value, handleChange, style } = props;
	return (
		<div
			style={{ ...styles.card, ...style }}
			key={option.id}
		>
			<img src={option.icon} alt={option.id} style={styles.icon} />
			<div style={styles.text}>{option.title}</div>
			<SelectInput
				options={option.values}
				id={option.id}
				value={value}
				handleChange={(v) => handleChange(v)}
			>
			</SelectInput>
		</div>
	)
};

export default SelectCard;
