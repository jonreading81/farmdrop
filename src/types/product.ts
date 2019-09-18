import { Action } from 'redux';

export interface IProductsState {
  items: IProduct[],
  isLoading: Boolean
  isError: Boolean
};

export interface IProduct {
  name: string;
  id: number;
};

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export type GET_PRODUCTS_REQUEST = typeof GET_PRODUCTS_REQUEST;
export type GET_PRODUCTS_SUCCESS = typeof GET_PRODUCTS_SUCCESS;
export type GET_PRODUCTS_ERROR = typeof GET_PRODUCTS_ERROR;

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
    msg: String
  };
};

export type ProductActions = IGetProductsSuccessAction | IGetProductsRequestAction | IGetProductsErrorAction;
