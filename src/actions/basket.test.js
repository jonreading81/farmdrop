import {
  addItemToBasketAction,
  removeItemToBasketAction,
} from './basket';

describe('Basket actions', () => {
  describe('addItemToBasketAction' , () => {
    let action;
    const product = 'product';

    beforeAll(() => {
      action = addItemToBasketAction(product);
    });

    it('should set type ADD_ITEM_TO_BASKET', () => {
      expect(action.type).to.equal( 'ADD_ITEM_TO_BASKET');
    });

    it('should set product', () => {
      expect(action.payload.product).to.equal(product);
    });
  });

  describe('removeItemToBasketAction' , () => {
    let action;
    const product = 'product';

    beforeAll(() => {
      action = removeItemToBasketAction(product);
    });

    it('should set type ADD_ITEM_TO_BASKET', () => {
      expect(action.type).to.equal( 'REMOVE_ITEM_FROM_BASKET');
    });

    it('should set product', () => {
      expect(action.payload.product).to.equal(product);
    });
  });

});