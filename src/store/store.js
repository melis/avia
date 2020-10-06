import { createStore, applyMiddleware, compose } from 'redux';
import reduser from './reduser';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(reduser, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;
