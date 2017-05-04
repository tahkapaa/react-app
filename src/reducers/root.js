import { combineReducers } from 'redux';
import counterReducer from './counter';
import productsReducer from './products';

const rootReducer = combineReducers({
  counter: counterReducer,
  productsData: productsReducer,
});

export default rootReducer;
