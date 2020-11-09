import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.scss';
import App from '../src/components/index.js';
import store from '../src/state/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
