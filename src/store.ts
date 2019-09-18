import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagaFactory from './sagas/product';
import { IApplicationState }from './types';
import apiFactory from './services/api';
import {API_ENDPOINT} from './constants'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});

export default function configureStore(
  preloadedState: IApplicationState
  ) : Store {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
      )
    )
  );
  sagaMiddleware.run(sagaFactory(apiFactory(API_ENDPOINT)));
  return store
}