import React from 'react';
import {getProductsRequestAction} from '../../actions/product';
import {addItemToBasketAction, removeItemToBasketAction} from '../../actions/basket';
import { connect } from 'react-redux';
import ProductGrid from '../../components/product-grid';
import Header from '../../components/header';
import {IApplicationState} from '../../types';
import {IProduct, IGetProductsRequestAction} from '../../types/product';
import {IBasketItem} from '../../types/basket';
import {IRemoveItemFromBasketAction, IAddItemToBasketAction} from '../../types/basket';
import {StyledAppContentWrapper} from './styles';
import 'normalize.css';
import '../../styles/main.css';

interface IAppProps {
  getProductsRequestAction(): IGetProductsRequestAction,
  addItemToBasketAction(): IAddItemToBasketAction,
  removeItemToBasketAction(): IRemoveItemFromBasketAction,
  products: IProduct[],
  basketItems: IBasketItem[],
  isLoading: Boolean,
  isError: Boolean
};

const App: React.FC <IAppProps> = ({
  getProductsRequestAction, 
  addItemToBasketAction,
  removeItemToBasketAction,
  products,
  basketItems,
  isLoading,
  isError
}) => (
  <div>
    <Header basketItems={basketItems}/>
    <StyledAppContentWrapper>
    <ProductGrid 
    getProducts={getProductsRequestAction} 
    addToBasket={addItemToBasketAction}
    removeFromBasket={removeItemToBasketAction}
    products={products}
    isLoading={isLoading}
    isError={isError}
    basketItems={basketItems}
  />
  </StyledAppContentWrapper>
  </div>
);

const mapStateToProps = (state: IApplicationState) => ({
  products: state.products.items,
  basketItems: state.basket.items,
  isLoading: state.products.isLoading,
  isError: state.products.isError
});

const mapDispatch = {
  getProductsRequestAction,
  addItemToBasketAction,
  removeItemToBasketAction,
};

export default connect(mapStateToProps, mapDispatch)(App);
