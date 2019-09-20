import { IProductsState } from './product';
import { IBasketState } from './basket';

export interface IApplicationState {
  products: IProductsState,
  basket: IBasketState,
}

export interface IMedia {
  url: string
}

export interface ITag {
  name: string
}
