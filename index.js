import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './containers/appContainer';

const App = (props) => {
	return (
		<AppContainer {...props} />
	)
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"))
