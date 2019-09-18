import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from  './store';
import App from './containers/app';

const initalState = {
  products: {
    items:[],
    isLoading: false,
    isError: false,
  },
};

const store = configureStore(initalState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  rootElement
)