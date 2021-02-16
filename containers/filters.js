import React, { Component } from 'react';

import SelectCard from '../components/selectCard'

import sun from '../images/illustrations/sun.png';
import watering_can from '../images/illustrations/wateringcan.png';
import dog from '../images/illustrations/dog.png';

const styles = ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	inner_container: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		padding: 10,
		width: '75%',
		flexWrap: 'wrap',
	},
	card: {
		// margin: 'min(max(4vw, 10px), 50px) 30px',
		maxWidth: '300px',
	},
	card_mobile: {
		margin: 'min(max(4vw, 10px), 50px) 30px',
		minWidth: '70vw',
	},
});

const options = [
	{
		id: 'sunlight',
		icon: sun,
		title: <p><b>1.</b> Set the amount of <b>sunlight</b> your plant will get.</p>,
		values: ['No sunlight', 'Low sunlight', 'High sunlight'],
	},
	{
		id: 'water',
		icon: watering_can,
		title: <p><b>2.</b> How often do you want to <b>water</b> your plant?</p>,
		values: ['Rarely', 'Regularly', 'Daily'],
	},
	{
		id: 'pets',
		icon: dog,
		title: <p><b>3.</b> Do you have pets? Do they <b>chew</b> plants?</p>,
		values: ['No/They don\'t care', 'Yes'],
	},
];

class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sunlight: '',
			water: '',
			pets: '',
		};
	}

	render() {
		let { mobile, values, handleChange } = this.props;
		return (
			<div style={styles.container}>
				<div style={styles.inner_container}>
					{options.map(option => 
						<SelectCard
							mobile
							key={option.id}
							option={option}
							value={values[option.id]}
							handleChange={(value) => handleChange({ [option.id]: value })}
							style={mobile? styles.card_mobile : styles.card}
						>
						</SelectCard>
					)}
				</div>
			</div>
		)
	}
}

export default Filters;	