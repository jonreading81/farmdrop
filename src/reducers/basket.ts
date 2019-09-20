
import { Reducer, Action } from 'redux';
import { 
  IBasketState, 
  BasketActions,
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
  IAddItemToBasketAction,
  IRemoveItemFromBasketAction,
} from '../types/basket';

export const initialState = {
  items: []
};

const reducer: Reducer<IBasketState> = (state: IBasketState = initialState, action: Action = {type: ''}) => {
  switch((action as BasketActions).type) {
    case ADD_ITEM_TO_BASKET: 
      return addBasketItem(state, action);
    case REMOVE_ITEM_FROM_BASKET:
      return removeBasketItem(state, action);
    default:
     return state;
  }
};

const addBasketItem: Reducer<IBasketState>  = (state: IBasketState = initialState, action: Action) => {
  const {product, variant} = (action as IAddItemToBasketAction).payload;
  const items =  state.items.slice(0);
  items.push({product, variant});

  return {
    ...state,
    items,
  };
}

const removeBasketItem: Reducer<IBasketState>  = (state: IBasketState = initialState, action: Action) => {
  const {product, variant} = (action as IRemoveItemFromBasketAction).payload;
  const items =  state.items.slice(0);
  const index =   items.findIndex((item) => item.variant.id === variant.id && item.product.id === product.id );

  if(index >= 0){
    items.splice(index, 1);
  }
  return {
    ...state,
    items,
  };
}

export default reducer;