
import { Reducer, Action } from 'redux';
import { IProductsState, 
  ProductActions,
  IGetProductsSuccessAction,
  IGetProductsErrorAction,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR

} from '../types/product';

export const initialState = {
  isLoading: false,
  isError: false,
  items: []
};

const reducer: Reducer<IProductsState> = (state: IProductsState = initialState, action: Action = {type: ''}) => {
  switch((action as ProductActions).type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case GET_PRODUCTS_SUCCESS: 
      const products = (action as IGetProductsSuccessAction).payload.products;
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: products
      }
    case GET_PRODUCTS_ERROR: 
      const msg = (action as IGetProductsErrorAction).payload.msg;
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: msg
      }
    default:
      return state;
  }
}
export default reducer;