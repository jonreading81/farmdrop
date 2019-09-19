import { Action } from 'redux';
import { IMedia, ITag} from './index';

export interface IProductsState {
  items: IProduct[],
  isLoading: Boolean
  isError: Boolean
};

export interface IProductMeasurement {
  displayName: string
}

export interface IProductPrice {
  pence: number
}

export interface IProductVariant {
  pricePerUnit: string,
  measurement: IProductMeasurement,
  price: IProductPrice,
  salePrice: IProductPrice
  saleText: string,
};

export interface IProduct {
  name: string;
  id: number;
  media: IMedia[],
  tags: ITag[]
  variants: IProductVariant[]
  producer: {
    name: string
  }
  measurement: IProductMeasurement
  pricePerUnit: string,
  price: IProductPrice,
  salePrice: IProductPrice
  saleText: string,
  selectedVariant: any
};

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const SELECT_PRODUCT_VARIANT = 'SELECT_PRODUCT_VARIANT';

export type GET_PRODUCTS_REQUEST = typeof GET_PRODUCTS_REQUEST;
export type GET_PRODUCTS_SUCCESS = typeof GET_PRODUCTS_SUCCESS;
export type GET_PRODUCTS_ERROR = typeof GET_PRODUCTS_ERROR;
export type SELECT_PRODUCT_VARIANT = typeof SELECT_PRODUCT_VARIANT;

export interface IGetProductsSuccessAction extends Action {
  type: GET_PRODUCTS_SUCCESS;
  payload: {
    products: IProduct[];
  };
};

export interface IGetProductsRequestAction extends Action {
  type: GET_PRODUCTS_REQUEST
};

export interface IGetProductsErrorAction extends Action {
  type: GET_PRODUCTS_ERROR,
  payload: {
    msg: string
  };
};

export interface ISelectProductVariantAction extends Action {
  type: SELECT_PRODUCT_VARIANT,
  payload: {
    productId: number,
    variantId: number
  };
};
export type ProductActions = 
  IGetProductsSuccessAction | 
  IGetProductsRequestAction | 
  IGetProductsErrorAction |
  ISelectProductVariantAction;
