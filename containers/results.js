import React, { Component } from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Carousel from 'react-elastic-carousel';

import NoResults from '../components/noResults';
import Pick from '../components/pick';

import pick from '../images/illustrations/pick.png';
import arrow_up from '../images/icons/arrow-up.svg';
import arrow_up_white from '../images/icons/arrow-up-white.svg';

const styles = ({
	container: {
		display: 'flex',
		backgroundColor: '#f2f2f2',
		justifyContent: 'space-around',
	},
	no_results: {
		width: '90vw'
	},
	results_container: {
		display: 'block',
		width: '70vw',
		justifyContent: 'space-between',
	},
	picks: {
		marginBottom: 120
	},
	img_pick: {
		height: '80px',
		width: 'auto',
		margin: '3vw 0 0 2vw',
	},
	title: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: '55px',
		color: '#0c261c',
		lineHeight: '60px',
		margin: '1vw 0 3vw 2vw',
	},
	button: {
		border: '1px solid #15573f',
		boxSizing: 'border-box',
		borderRadius: '25px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50,
		outline: 'none',
	},
	hover: {
		backgroundColor: '#196146',
		color: '#fff',
	},
	button_text: {
		color: '#196146',
		fontFamily: 'Montserrat',
		fontSize: '16px',
		paddingLeft: 10,
	},
});

class Results extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		}
	}

	renderCarousel = (results) => {
		let results_component = results.filter(item => item.staff_favorite === true);
		results_component = results_component.concat(results.filter(item => item.staff_favorite === false));

		return results.length !== 0 && (
			<div style={styles.results_container} >
				<Carousel >
					{results_component.map(item => 
						<Pick key={item.id} value={item} mobile />
					)}
				</Carousel>
			</div>
		)
	}

	renderMasonry = (results) => {
		let results_component = results.filter(item => item.staff_favorite === true);
		results_component = results_component.concat(results.filter(item => item.staff_favorite === false));

		return results.length !== 0 && (
			<div style={styles.results_container} >
				<ResponsiveMasonry
					columnsCounBreakPoints={{ 800: 1, 1000: 2, 1800: 3}}
				>
					<Masonry gutter="10">
						{results_component.map(item => 
							<Pick key={item.id} value={item} />
						)}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		)
	}

	render() {
		let { results, mobile } = this.props;
		let { hover } = this.state;
		
		return (
			<div style={styles.container}>
				{results.length !== 0 ? (
					<div style={styles.picks}>
						<img style={styles.img_pick} src={pick} alt="pick" />
						<h1 style={styles.title}>Our picks for you</h1>
						{mobile ? this.renderCarousel(results) : this.renderMasonry(results)}
						<button
							style={
								hover === true
									? { ...styles.button, ...styles.hover }
									: styles.button
							}
							type="button"
							onTouchStart={() => this.setState({ hover: true })}
							onTouchEnd={() => this.setState({ hover: false })}
							onMouseOver={() => this.setState({ hover: true })}
							onMouseOut={() => this.setState({ hover: false })}
							onMouseUp={() => this.setState({ hover: false })}
							onClick={() => {
								document.body.scrollTo({ top: 0, behavior: 'smooth' });
								document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
							}}
						>
							<img src={hover === true ? arrow_up_white : arrow_up} alt="arrow top" />
							<p
								style={
									hover === true
										? { ...styles.button_text, ...styles.hover }
										: styles.button_text
									}
							>
								back to the top
							</p>
						</button>
					</div>
				) : (
					<NoResults style={styles.no_results} />
				)}
			</div>
		);
	}
}

export default Results;
