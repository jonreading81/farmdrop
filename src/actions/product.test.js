import {
  getProductsErrorAction,
  getProductsRequestAction,
  getProductsSuccessAction,
  selectProductVariantAction,
} from './product';

describe('Product actions', () => {
  describe('getProductsRequestAction' , () => {
    let action;
    beforeAll(() => {
      action = getProductsRequestAction();
    });

    it('should set type GET_PRODUCTS_REQUEST', () => {
      expect(action.type).to.equal( 'GET_PRODUCTS_REQUEST');
    });
  });

  describe('getProductsSuccessAction' , () => {
    let action;
    const products = [1,2,3];
    beforeAll(() => {
      action = getProductsSuccessAction(products);
    });

    it('should set type GET_PRODUCTS_SUCCESS', () => {
      expect(action.type).to.equal('GET_PRODUCTS_SUCCESS');
    });

    it('should set products provided on the payload', () => {
      expect(action.payload.products).to.eql(products);
    });
  });

  describe('getProductsErrorAction' , () => {
    let action;
    const msg = 'error';
    beforeAll(() => {
      action = getProductsErrorAction(msg);
    });

    it('should set type GET_PRODUCTS_ERROR', () => {
      expect(action.type).to.equal('GET_PRODUCTS_ERROR');
    });

    it('should set msg provided on the payload', () => {
      expect(action.payload.msg).to.eql(msg);
    });
  });

  describe('selectProductVariantAction' , () => {
    let action;
    const productId = 1;
    const variantId = 2;

    beforeAll(() => {
      action = selectProductVariantAction(productId, variantId);
    });

    it('should set type SELECT_PRODUCT_VARIANT', () => {
      expect(action.type).to.equal('SELECT_PRODUCT_VARIANT');
    });

    it('should set variantId provided on the payload', () => {
      expect(action.payload.variantId).to.eql(variantId);
    });

    it('should set productId provided on the payload', () => {
      expect(action.payload.productId).to.eql(productId);
    });
  });
});