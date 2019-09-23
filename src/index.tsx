import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from  './store';
import App from './containers/app';
import { initialState as productsIntalState } from './reducers/products';
import { initialState as basketIntalState } from './reducers/basket';

const initalState = {
  products: productsIntalState,
  basket: basketIntalState,
};

const store = configureStore(initalState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  rootElement
)