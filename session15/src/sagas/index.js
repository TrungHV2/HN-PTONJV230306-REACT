import {all, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions';
import * as productSaga from './product-saga';

export const rootSaga = function* () {
    yield all([
        takeEvery(actions.getProduct, productSaga.getAllPrdoucts),
        //takeEvery(actions.postProduct, productSaga.postPrdoucts)
    ])
}