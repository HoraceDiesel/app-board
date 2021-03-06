import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { Records } from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Records />
  </Provider>,
  document.getElementById('app')
);