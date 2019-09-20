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

  describe('GET_PRODUCTS_SUCCESS', () => {
    it('should set state and add id and variant to products', () => {
      const products = [
        {
          name: 'name',
          pricePerUnit:'pricePerUnit',
          measurement:'measurement',
          price:'price',
          salePrice:'salePrice',
          saleText:'saleText',
          variants: []
      }
      ];
      const expectedProducts = [
        {
          id:0, 
          name: 'name', 
          pricePerUnit:'pricePerUnit',
          measurement:'measurement',
          price:'price',
          salePrice:'salePrice',
          saleText:'saleText',
          variants:[{
            id: 0,
            pricePerUnit:'pricePerUnit',
            measurement:'measurement',
            price:'price',
            salePrice:'salePrice',
            saleText:'saleText',
          }]
        }
      ];
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
      ).items).to.eql(expectedProducts)
    });

  });
});