import React from 'react';
import { render } from 'react-dom';
import { Records } from './components';
import C from '../constants/dummy';

render(
  <Records msgs={C} />,
  document.getElementById('content')
);