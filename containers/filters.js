import React, { Component } from 'react';

import SelectCard from '../components/selectCard'

import sun from '../images/illustrations/sun.png';
import watering_can from '../images/illustrations/wateringcan.png';
import dog from '../images/illustrations/dog.png';

const styles = ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		flexWrap: 'wrap',
		'@media only screen and (maxWidth: 1000)': {
			flexDirection: 'column',
		}
	},
	card: {
		margin: 'min(max(4vw, 10px), 50px)',
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
		let { mobile } = this.props;
		return (
			<div style={styles.container}>
				{options.map(option => 
					<SelectCard
						mobile
						key={option.id}
						option={option}
						value={this.state[option.id]}
						handleChange={(value) => this.setState({ [option.id]: value })}
						style={styles.card}
					>
					</SelectCard>
				)}
			</div>
		)
	}
}

export default Filters;	