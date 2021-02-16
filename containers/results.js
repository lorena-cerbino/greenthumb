import React, { Component } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import NoResults from '../components/noResults';

const styles = ({
	container: {
		display: 'flex',
		backgroundColor: '#f2f2f2',
		justifyContent: 'space-around',
	},
	no_results: {
		width: '90vw'
	},
	favorite: {
		padding: 10,
		display: 'flex',
	},
	inner_container: {
		padding: 10,
		display: 'flex',
	},
	img_favorite: {
		width: 'auto',
		maxWidth: '320px',
		height: '400px',
	},
	img: {
		width: 'auto',
		maxWidth: '200px',
		height: '160px',
	},
	results_container: {
		display: 'block',
		width: '70vw',
		justifyContent: 'space-between',
	},
});

class Results extends Component {
	constructor(props) {
		super(props);
	}

	renderMasonry = (results) => {
		let results_component = results.filter(item => item.staff_favorite === true);
		results_component = results_component.concat(results.filter(item => item.staff_favorite === false));
		console.log(results_component);

		return <div style={styles.results_container} >
			<ResponsiveMasonry
				columnsCounBreakPoints={{ 800: 1, 1000: 2, 1800: 3}}
			>
				<Masonry gutter="10">
					{results_component.map(item => 
						<div style={item.staff_favorite ? styles.favorite : styles.inner_container} key={item.id}>
							<img style={item.staff_favorite ? styles.img_favorite : styles.img} src={item.url} alt={item.name} />
						</div>
					)}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	}

	render() {
		let { results } = this.props;
		
		return (
			<div style={styles.container}>
				{results.length !== 0 ? (
					this.renderMasonry(results)
				) : (
					<NoResults style={styles.no_results} />
				)}
			</div>
		);
	}
}

export default Results;
