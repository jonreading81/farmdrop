import reducer from './basket';

describe('Basket reducer', () => {

  it('should add an item', () => {
    const product = 'product';
    const variant = 'variant';
    const state = {
      items: []
    };

    const action = {
      type: 'ADD_ITEM_TO_BASKET',
      payload: {
        product,
        variant,
      }
    };
    expect(reducer(state, action)).to.eql({
      items: [{
        product, variant
      }],
    });
  });
  it('should remove  an item', () => {
    const product = {id: 1};
    const variant = {id: 1};
    const variant2 = {id: 2};
    const state = {
      items: [
        { product, variant},
        { product, variant: variant2}
     ]
    };

    const action = {
      type: 'REMOVE_ITEM_FROM_BASKET',
      payload: {
        product,
        variant,
      }
    };
    expect(reducer(state, action)).to.eql({
      items: [{
        product, variant:variant2
      }],
    });
  });
  
});