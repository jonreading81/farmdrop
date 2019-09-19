import { ActionCreator } from 'redux';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  SELECT_PRODUCT_VARIANT,
  IGetProductsRequestAction,
  IGetProductsSuccessAction,
  IGetProductsErrorAction,
  ISelectProductVariantAction,
  IProduct
} from '../types/product';

export const getProductsRequestAction: ActionCreator<IGetProductsRequestAction> = () => ({
  type: GET_PRODUCTS_REQUEST
});

export const getProductsSuccessAction: ActionCreator<IGetProductsSuccessAction> = (products: IProduct[]) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: {
    products
  }
});

export const getProductsErrorAction: ActionCreator<IGetProductsErrorAction> = (msg: string) => ({
  type: GET_PRODUCTS_ERROR,
  payload: {
    msg
  }
});

export const selectProductVariantAction: ActionCreator<ISelectProductVariantAction> = (productId: number, variantId: number) => ({
  type: SELECT_PRODUCT_VARIANT,
  payload: {
    productId,
    variantId,
  }
});
