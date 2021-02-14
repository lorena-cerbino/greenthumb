import React from 'react';

import left_leaves from '../images/hero/desktop/left-leaves.png';
import plant_person from '../images/hero/desktop/plantperson.png';
import right_leaves from '../images/hero/desktop/right-leaves.png';
import mobile_leaves from '../images/hero/mobile/mobile-leaves.png';
import mobile_plant_person from '../images/hero/mobile/mobile-plantperson.png';

const styles = ({
	container: {
		backgroundColor: '#75bc97',
		display: 'flex',
		minHeight: '500px',
	},
	mobile_container: {
		backgroundColor: '#75bc97',
		display: 'flex',
		flexDirection: 'column',
	},
	left: {
		height: 'auto',
		width: '100%',
		backgroundImage: `url(${left_leaves})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		overflow: 'hidden',
		backgroundPosition: 'top right',
		zIndex: 1,
	},
	center: {
		marginLeft: '-4%',
		marginRight: '-2%',
		marginTop: '2.2%',
		marginBottom: '2.2%',
		height: 'auto',
		width: '100%',
		maxWidth: '360px',
		backgroundImage: `url(${plant_person})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		backgroundPosition: 'top right',
	},
	right: {
		height: 'auto',
		width: '100%',
		maxWidth: '360px',
		backgroundImage: `url(${right_leaves})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		overflow: 'hidden',
		backgroundPosition: 'top left',
	},
	top: {
		marginBottom: '-20%',
		height: 'auto',
		width: '100%',
		backgroundImage: `url(${mobile_leaves})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center bottom',
		zIndex: 2,
		minHeight: '800px',
	},
	bottom: {
		height: 'auto',
		width: '100%',
		backgroundImage: `url(${mobile_plant_person})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '80%',
		height: 'auto',
		backgroundPosition: 'center top',
	},
	space: {
		minHeight: 'min(max(80vw, 200px), 1000px)',
	},
});

const Header = (props) => {
	return (
		props.mobile ? (
			<div style={styles.mobile_container}>
				<div style={styles.top}>
					{props.children}
				</div>
				<div style={styles.bottom}>
					<div style={styles.space}>{''}</div>
				</div>
			</div>
		) : (
			<div style={styles.container}>
				<div style={styles.left}>
					{props.children}
				</div>
				<div style={styles.center}> </div>
				<div style={styles.right} />
			</div>
		)
	);
}

export default Header;
