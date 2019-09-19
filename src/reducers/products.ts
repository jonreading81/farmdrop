
import { Reducer, Action } from 'redux';
import { IProductsState, 
  ProductActions,
  IGetProductsSuccessAction,
  IGetProductsErrorAction,
  ISelectProductVariantAction,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  SELECT_PRODUCT_VARIANT,
  IProduct

} from '../types/product';

export const initialState = {
  isLoading: false,
  isError: false,
  items: []
};

const parseProduct = (product:IProduct, index: number) => {
  return {
    ...product,
    selectedVariant: Array.isArray(product.variants) && product.variants.length && 0,
    id: index
  }
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
    case SELECT_PRODUCT_VARIANT:
      const {productId, variantId} = (action as ISelectProductVariantAction).payload;
      const items = state.items.slice(0);
      const product = items[productId];
      const variant = product.variants[variantId];
      const productWithVariant ={
        ...product,
        pricePerUnit: variant.pricePerUnit,
        measurement: variant.measurement, 
        price: variant.price,
        salePrice: variant.salePrice,
        saleText: variant.saleText,
        selectedVariant: variantId,
      }
      items[productId] = productWithVariant;
      return {
        ...state,
        items
      };
    default:
      return state;
  }
}
export default reducer;