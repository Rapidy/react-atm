import { createStore } from 'redux';
import atmRecuder from './reducers/atmReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(atmRecuder, composeWithDevTools());

export default store;
