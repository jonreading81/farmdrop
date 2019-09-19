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
    it('should set state and add ids to products', () => {
      const products = [{name: 'name'}];
      const expectedProducts = [
        {id:0, name: 'name', selectedVariant: false}
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
      )).to.eql({
        isLoading: false,
        isError: false,
        items: expectedProducts
      })
    });

    it('should set the selectedVariant to 1 if product has variants', () => {
      const products = [{variants:[1]}];
      const expectedProducts =[{
        id: 0,
        variants:[1],
        selectedVariant:0
      }];
  
      expect(productsReducer(
        {
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

    describe('SELECT_PRODUCT_VARIANT', () => {

      it('should updated the pricing data using the variant', () => {
        const products = [{
          id:1,
          name: 'name',
          variants: [{
            pricePerUnit: 'pricePerUnit',
            measurement: 'measurement',
            price: 'price',
            salePrice: 'salePrice',
            saleText: 'saleText',
          }]
        } ];
        const expectedProducts = [{
          id:1,
          name: 'name',
          variants: [{
            pricePerUnit: 'pricePerUnit',
            measurement: 'measurement',
            price: 'price',
            salePrice: 'salePrice',
            saleText: 'saleText',
          }],
          pricePerUnit: 'pricePerUnit',
          measurement: 'measurement',
          price: 'price',
          salePrice: 'salePrice',
          saleText: 'saleText',
          selectedVariant:0
        } ];
        expect(productsReducer(
          {
            isError: false,
            isLoading: false,
            items: products
          },
          {
          type: 'SELECT_PRODUCT_VARIANT',
          payload: {
            productId:0,
            variantId:0
          }
        }
        ).items).to.eql(expectedProducts)
      });
  
    });
  });
});