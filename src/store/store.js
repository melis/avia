import { createStore, applyMiddleware } from 'redux';
import reduser from './reduser';
import reduxThunk from 'redux-thunk';
const store = createStore(reduser, applyMiddleware(reduxThunk));

export default store;
