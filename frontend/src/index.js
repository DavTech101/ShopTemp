import React from 'react';
import store from './store.js';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';

import './css/bootstrap.min.css';
import './css/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
