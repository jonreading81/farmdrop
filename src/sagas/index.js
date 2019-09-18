import { all } from 'redux-saga/effects';
import productsSagaFactory from './product';

const sagaFactory = api => {

  return function* rootSaga() {
    yield all([productsSagaFactory(api)]);
 };
};

export default sagaFactory;