import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import App from './components/HomePage';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" component={App}/>
			</Switch>
		</Router>
	</Provider>
);

export default Root;
