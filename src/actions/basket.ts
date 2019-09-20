import { ActionCreator } from 'redux';
import {
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
  IAddItemToBasketAction,
  IRemoveItemFromBasketAction,
} from '../types/basket';

import {IProduct, IProductVariant} from '../types/product';

export const addItemToBasketAction: ActionCreator<IAddItemToBasketAction> = (
  product: IProduct, variant: IProductVariant
  ) => ({
  type: ADD_ITEM_TO_BASKET,
  payload: {
    product,
    variant
  }
});

export const removeItemToBasketAction: ActionCreator<IRemoveItemFromBasketAction> = (
  product: IProduct, variant: IProductVariant) => ({
  type: REMOVE_ITEM_FROM_BASKET,
  payload: {
    product, 
    variant
  }
});

