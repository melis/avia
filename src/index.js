import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Avia from './components/Avia/Avia';
import store from './store/store';
window.store = store;
// import aviaApi from './aviaApi/aviaApi';
// aviaApi.getTickets().then((a) => console.log(a));

ReactDOM.render(
  <Provider store={store}>
    <Avia />
  </Provider>,
  document.getElementById('root'),
);
