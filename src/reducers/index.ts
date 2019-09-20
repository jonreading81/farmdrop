import { combineReducers, Reducer } from 'redux';
import products from './products';
import basket from './basket';

const rootReducer: Reducer = 
combineReducers({
  products,
  basket,
})
export default rootReducer