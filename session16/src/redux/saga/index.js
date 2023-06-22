import { all, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/action-type';
import * as productSaga from './product-saga'

export const rootSaga = function* () {
    yield all([
        takeLatest(types.GET_PRODUCT, productSaga.fetchProduct),
        takeLatest(types.GET_PRODUCT_DETAIL, productSaga.fetchProductDetail)
    ])
}