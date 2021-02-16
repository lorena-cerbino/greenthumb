import React from 'react';

import Select from 'react-dropdown-select';

const styles = ({
	container: {
		border: '1px solid #a8a8a8',
		borderSizing: 'border-box',
		borderRadius: '24px',
		backgroundColor: '#f2f2f2',
		padding: 12,
		fontFamily: 'Montserrat',
		fontWeight: 300,
		fontSize: 14,
		lineHeight: '27px',
		color: '#a8a8a8',
		width: '100%',
	},
	option: {
		backgroundColor: '#f2f2f2',
		padding: 10,
		border: '1px',
		// borderTop: '0',
		borderStyle: 'solid',
		borderColor: '#a8a8a8',
		borderRadius: '19px',
		borderSizing: 'border-box',
	},
	font: {
		fontFamily: 'Montserrat',
		margin: 0,
		padding: 0,
	},
});

const SelectInput = (props) => {
	let { id, name, options, value, handleChange, style } = props;
	let opt = options.map(item => ({ value: item, label: item }))
	return (
		<Select
			options={opt}
			onChange={(v) => handleChange && handleChange(v[0].value)}
			values={[value]}
			style={{ ...styles.container, ...style }}
			contentRenderer={() => <p style={styles.font}>{value || 'Select...'}</p>}
			// dropdownRenderer={(o) => {
			// 	console.log(o.methods)
			// 	return <div style={styles.option}>
			// 		{opt.map(item => 
			// 			<option key={item.value}>{item.label}</option>
			// 		)}
			// 	</div>}
			// }
			dropdownGap={0}
			id={id || ''}
			name={name || id || ''}
		/>
	);
};

export default SelectInput;
