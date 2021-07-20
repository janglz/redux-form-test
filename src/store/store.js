import { createStore, applyMiddleware } from 'redux';
import initialState from './initialState'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;