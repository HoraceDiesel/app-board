import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Records } from './containers';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<Records />
	</Provider>,
  document.getElementById('content')
);