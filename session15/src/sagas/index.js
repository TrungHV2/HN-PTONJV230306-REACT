import {all, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions';
import * as productSaga from './product-saga';

export const rootSaga = function* () {
    yield all([
        takeLatest(actions.getProduct, productSaga.getAllPrdoucts),
        //takeEvery(actions.postProduct, productSaga.postPrdoucts)
    ])
}