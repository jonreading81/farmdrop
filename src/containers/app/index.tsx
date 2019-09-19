import React from 'react';
import {getProductsRequestAction, selectProductVariantAction} from '../../actions/product';
import { connect } from 'react-redux';
import ProductGrid from '../../components/product-grid';
import {IApplicationState} from '../../types';
import {IProduct, IGetProductsRequestAction, ISelectProductVariantAction} from '../../types/product';
import 'normalize.css';
import '../../styles/main.css';

interface IAppProps {
  getProductsRequestAction(): IGetProductsRequestAction,
  selectProductVariantAction(): ISelectProductVariantAction, 
  products: IProduct[],
  isLoading: Boolean,
  isError: Boolean
};

const App: React.FC <IAppProps> = ({
  getProductsRequestAction, 
  selectProductVariantAction,
  products,
  isLoading,
  isError
}) => (
  <ProductGrid 
    getProducts={getProductsRequestAction} 
    selectVariant={selectProductVariantAction}
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
  getProductsRequestAction,
  selectProductVariantAction
};

export default connect(mapStateToProps, mapDispatch)(App);
