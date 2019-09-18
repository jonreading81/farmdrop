import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import productSagaFactory from './product';
import sinon from 'sinon';
import {getProductsSuccessAction, getProductsErrorAction} from '../actions/product';


jest.mock('../actions/product', () => ({
  getProductsSuccessAction: (products) => ({type:'GET_PRODUCTS_SUCCESS', products}),
  getProductsErrorAction: (msg) => ({type:'GET_PRODUCTS_ERROR', msg}),
}));





describe('productSaga', () => {
  it('GET_PRODUCTS_REQUEST should make an api call and trigger the success action', () => {
    const products = {
      productSearch: {
        nodes: [1,2,3]
      }
    }
    const api = {
      getProducts: sinon.stub().returns(products)
    }
    const   mySaga = productSagaFactory(api)
    return expectSaga(mySaga)
      .put({
        type: 'GET_PRODUCTS_SUCCESS',
        products: products.productSearch.nodes
      })
      .dispatch({ type: 'GET_PRODUCTS_REQUEST'})
      .run();
  });


  it('GET_PRODUCTS_REQUEST should trigger and error action on an api error', () => {
    const api = {
      getProducts: sinon.stub().throws(),
    };
    const   mySaga = productSagaFactory(api)
    return expectSaga(mySaga)
      .put({
        type: 'GET_PRODUCTS_ERROR',
        msg: 'Error Loading Products...'
      })
      .dispatch({ type: 'GET_PRODUCTS_REQUEST'})
      .run();
  });
})

