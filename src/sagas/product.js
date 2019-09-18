import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_PRODUCTS_REQUEST} from '../types/product';
import {getProductsSuccessAction, getProductsErrorAction} from '../actions/product';

const productsSagaFactory = api => {
  function* productRequested() {
    try{
      const data = yield call(api.getProducts);
      yield put(getProductsSuccessAction(data.productSearch.nodes));
    }
    catch(err) {
      yield put(getProductsErrorAction('Error Loading Products...'))
    }
   }
   
   function* watchProducts() {
     yield takeEvery(GET_PRODUCTS_REQUEST, productRequested);
   }

   return watchProducts;
}

export default productsSagaFactory;