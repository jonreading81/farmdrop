import productsReducer from './products';

describe('Products reducer', () => {
  
  it('should set intial state', () => {
    expect(productsReducer()).to.eql({
      isLoading: false,
      isError: false,
      items: []
    })
  });

  it('should set the state for GET_PRODUCTS_REQUEST', () => {
    expect(productsReducer(
      {
        isError: true,
        isLoading: false,
        items: []
      },
      {
      type: 'GET_PRODUCTS_REQUEST'
    }
    )).to.eql({
      isLoading: true,
      isError: false,
      items: []
    })
  });

  it('should set state for GET_PRODUCTS_SUCCESS', () => {
    const products = [1];
    expect(productsReducer(
      {
        isError: true,
        isLoading: false,
        items: []
      },
      {
      type: 'GET_PRODUCTS_SUCCESS',
      payload: {
        products
      }
    }
    )).to.eql({
      isLoading: false,
      isError: false,
      items: products
    })
  });

  it('should set state for GET_PRODUCTS_ERROR', () => {
    const msg = 'msg';
    expect(productsReducer(
      {
        isError: false,
        isLoading: true,
        items: []
      },
      {
      type: 'GET_PRODUCTS_ERROR',
      payload: {
        msg
      }
    }
    )).to.eql({
      isLoading: false,
      isError: true,
      items: [],
      error: msg
    })
  });
});