
import { Reducer, Action } from 'redux';
import { IProductsState, 
  ProductActions,
  IGetProductsSuccessAction,
  IGetProductsErrorAction,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  IProduct,
  IProductVariant
} from '../types/product';

export const initialState = {
  isLoading: false,
  isError: false,
  items: []
};

const parseProduct = (product:IProduct, index: number) => {
  const {
    pricePerUnit,
    measurement,
    price,
    salePrice,
    saleText,
  } = product;

  let variants: IProductVariant[] = [];

  if(Array.isArray(product.variants)) {
    variants = product.variants.slice(0);
    variants.unshift({
      id: 0,
      pricePerUnit,
      measurement,
      price,
      salePrice,
      saleText,
    });
    variants = variants.map(((variant, index) => ({...variant, id: index})));
  }
  return {
    ...product,
    variants,
    id: index,
  };
};

const parseProducts = (products:IProduct []) => products.map(parseProduct);

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
        items: parseProducts(products)
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