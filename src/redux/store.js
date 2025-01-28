import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import for redux-thunk
import postReducer from './reducer';

const store = createStore(postReducer, applyMiddleware(thunk)); // Apply middleware

export default store;
