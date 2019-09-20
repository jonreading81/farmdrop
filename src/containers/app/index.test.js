
import React from 'react';
import configureStore from 'redux-mock-store';
import App from './index';
import {shallow } from 'enzyme';
import sinon from 'sinon';
import ProductGrid from '../../components/product-grid';

describe('App Container', () => {
  const mockStore = configureStore();
  let store;
  const state = {
    products: {
      items:[],
      isLoading: true,
      isError: true
    },
    basket: {
      items: []
    }
  }
  beforeAll(() => {
    const mockStore = configureStore();
    store = mockStore(state);
  });

  describe('Products Grid', () => {
    let productsGridComponent;

    beforeAll(() => {
      productsGridComponent = shallow(
      <App 
        store={store}
        />
        ).dive().dive().find(ProductGrid);
    });

    it('should set products', () => {
      expect(productsGridComponent.prop('products')).to.eql(state.products.items);
    });

    it('should set isLoading', () => {
      expect(productsGridComponent.prop('isLoading')).to.be.true;
    });

    it('should set isError', () => {
      expect(productsGridComponent.prop('isError')).to.be.true;
    });
  });
});