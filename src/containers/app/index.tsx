import React from 'react';
import {getProductsRequestAction} from '../../actions/product';
import { connect } from 'react-redux';
import ProductGrid from '../../components/product-grid';
import {IApplicationState} from '../../types';
import {IProduct, IGetProductsRequestAction} from '../../types/product'

interface IAppProps {
  getProductsRequestAction(): IGetProductsRequestAction,
  products: IProduct[],
  isLoading: Boolean,
  isError: Boolean
};

const App: React.FC <IAppProps> = ({
  getProductsRequestAction, 
  products,
  isLoading,
  isError
}) => (
  <ProductGrid 
    getProducts={getProductsRequestAction} 
    products={products}
    isLoading={isLoading}
    isError={isError}
  />
);

const mapStateToProps = (state: IApplicationState) => ({
  products: state.products.items,
  isLoading: state.products.isLoading,
  isError: state.products.isError
});

const mapDispatch = {
  getProductsRequestAction
};

export default connect(mapStateToProps, mapDispatch)(App);
