import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import Root from './routes';
import initialState from './reducers/initialState';

const store = configureStore({});

render(<Root store={store} />, document.getElementById('app'));
