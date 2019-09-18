import { combineReducers, Reducer } from 'redux';
import products from './products';

const rootReducer: Reducer = 
combineReducers({
  products,
})
export default rootReducer