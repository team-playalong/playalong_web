/* eslint-disable import/default */
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

import RadioButtons from './components/RadioButtons';

require('favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore({});

// Create an enhanced history that syncs navigation events with the store
render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('plyApp'),
);
