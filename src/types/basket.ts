import {IProduct, IProductVariant} from './product';
import { Action} from 'redux';

export interface IBasketItem {
  product: IProduct,
  variant: IProductVariant,
}
export interface IBasketState {
  items: IBasketItem[]
};

export const ADD_ITEM_TO_BASKET = 'ADD_ITEM_TO_BASKET';
export const REMOVE_ITEM_FROM_BASKET = 'REMOVE_ITEM_FROM_BASKET';

export type ADD_ITEM_TO_BASKET = typeof ADD_ITEM_TO_BASKET;
export type REMOVE_ITEM_FROM_BASKET = typeof REMOVE_ITEM_FROM_BASKET;

export interface IAddItemToBasketAction extends Action {
  type: ADD_ITEM_TO_BASKET;
  payload: {
    product: IProduct;
    variant: IProductVariant,
  };
};

export interface IRemoveItemFromBasketAction extends Action {
  type: REMOVE_ITEM_FROM_BASKET;
  payload: {
    product: IProduct;
    variant: IProductVariant,
  };
};

export type BasketActions = IAddItemToBasketAction | IRemoveItemFromBasketAction;