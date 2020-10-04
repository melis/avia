import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Provider } from 'react-redux';
import Avia from './components/Avia/Avia';
import store from './store/store';
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Avia />
  </Provider>,
  document.getElementById('root'),
);
