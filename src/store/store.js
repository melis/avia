import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduser from './reduser';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(reduser, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
