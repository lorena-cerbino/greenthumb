import React from 'react';

import pet from '../images/icons/pet.svg';
import toxic from '../images/icons/toxic.svg';
import sun from '../images/icons/sun.svg';
import low_sun from '../images/icons/low-sun.svg';
import no_sun from '../images/icons/no-sun.svg';
import one_drop from '../images/icons/1-drop.svg';
import two_drops from '../images/icons/2-drops.svg';
import three_drops from '../images/icons/3-drops.svg';

const styles = ({
	favorite: {
		margin: 10,
		display: 'flex',
		justifyContent: 'center',
		padding: 0,
	},
	inner_container: {
		margin: 10,
		display: 'flex',
	},
	img_favorite: {
		width: 'auto',
		maxWidth: '340px',
		height: '400px',
	},
	img: {
		width: 'auto',
		maxWidth: '200px',
		height: '160px',
	},
	staff_fav: {
		backgroundColor: '#75bc97',
		borderRadius: '0 22px 22px 0',
		maxHeight: '45px',
		width: 'auto',
		minWidth: '190px',
		marginRight: '-49%',
		marginTop: '30px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2,

		color: '#fff',
		fontWeight: 'bold',
		fontSize: '18px',
	},
	image: {
		backgroundColor: '#fff',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0 0 0',
	},
	description: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		color: '#1e6b4e',
	},
	description_fav: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		color: '#1e6b4e',
	},
	title: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: '16px',
		paddingLeft: 12,
	},
	title_fav: {
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		fontSize: '35px',
		maxWidth: '200px',
		paddingLeft: 12,
	},
	stats: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		justifyContent: 'space-between',
	},
	stats_fav: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		minWidth: '84px',
		width: 'auto',
		justifyContent: 'center',
		paddingRight: 12,
	},
	icons_fav: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
	},
	icons: {
		width: '20%',
		display: 'flex',
		justifyContent: 'space-between',
		paddingRight: 12,
	},
	value: {
		fontFamily: 'Montserrat',
		fontSize: '16px',
		fontWeight: 'bold',
		paddingLeft: 12,
	},
	value_fav: {
		fontFamily: 'Montserrat',
		fontSize: '24px',
		fontWeight: 'bold',
	},
});

const Pick = (props) => {
	let { value } = props;
	return (
		<div
			style={
				value.staff_favorite
					? styles.favorite
					: styles.inner_container
			}
		>
			{value.staff_favorite && 
				<div style={styles.staff_fav}>
					✨ Staff favorite
				</div>
			}
			<div style={styles.image}>
				<img
					style={value.staff_favorite ? styles.img_favorite : styles.img}
					src={value.url}
					alt={value.name}
				/>
				<div style={value.staff_favorite ? styles.description_fav : styles.description}>
					<h2 style={value.staff_favorite ? styles.title_fav : styles.title}>
						{value.name}
					</h2>
					<div style={value.staff_favorite ? styles.stats_fav : styles.stats}>
						<h2 style={value.staff_favorite ? styles.value_fav : styles.value}>
							${value.price}
						</h2>
						<div style={value.staff_favorite ? styles.icons_fav : styles.icons}>
							<img
								src={
									value.toxicity === true ? toxic : pet
								}
								alt="toxicity"
							/>
							<img
								src={
									(value.sun === 'high' && sun) ||
									(value.sun === 'low' && low_sun) ||
									(value.sun === 'no' && no_sun)
								}
								alt="sunlight"
								style={{ width: '19px', height: '19px' }}
							/>
							<img
								src={
									(value.water === 'rarely' && one_drop) ||
									(value.water === 'regularly' && two_drops) ||
									(value.water === 'daily' && three_drops)
								}
								alt={value.water}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pick;
