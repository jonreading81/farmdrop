import { IProductsState } from './product';

export interface IApplicationState {
  products: IProductsState
}

export interface IMedia {
  url: string
}

export interface ITag {
  name: string
}
