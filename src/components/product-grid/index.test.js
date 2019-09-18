import React from 'react';
import {mount, shallow} from 'enzyme';
import ProductGrid from './index';
import ProductCard from '../product-card';
import Loader from '../loader';
import ErrorMessage from '../error';
import sinon from 'sinon';

describe('Product Grid', () => {
  it('should request the products', () => {
    const getProducts = sinon.spy(); 
    mount(<ProductGrid getProducts={getProducts} products={[]} />);
    expect(sinon.assert.calledOnce(getProducts));
  });

  it('should show a loader when isLoading', () => {
    const getProducts = sinon.spy(); 
    const context = shallow(<ProductGrid 
      getProducts={getProducts} 
      products={[]} 
      isLoading/>
      );
    expect(context.find(Loader)).to.have.length(1);
    expect(context.find(Loader).prop('text')).to.equal('Loading Products');
  });

  it('should show a error when isError', () => {
    const getProducts = sinon.spy(); 
    const context = shallow(<ProductGrid 
      getProducts={getProducts} 
      products={[]} 
      isError />
      );
    expect(context.find(ErrorMessage)).to.have.length(1);
    expect(context.find(ErrorMessage).prop('text')).to.equal('Error Loading Products');
  });

  it('should display a ProductCard for each product', () => {
    const products = [
      { name: 'test'},
      { name: 'test2'}
    ];
    expect(shallow(
    <ProductGrid getProducts={() => {}} products={products} />
    ).find(ProductCard)).to.have.length(2);
  });
});