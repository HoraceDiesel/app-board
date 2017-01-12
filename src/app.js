import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Records } from './components';
import C from '../constants/dummy';
import { List, Map } from 'immutable';
import reducer from './reducer';

const store = createStore(reducer);

render(
  <Records msgs={ store.getState() } />,
  document.getElementById('content')
);