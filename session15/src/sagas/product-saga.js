import * as productServices from '../services/product-service';
import {call,put} from 'redux-saga/effects';
import * as actions from '../actions';

export function* getAllPrdoucts() {
    try {
        console.log('Lấy dữ liệu products từ API');
        let listProducts = yield call(productServices.getProducts);
        console.log();
        yield put(actions.fetchProduct(listProducts))
    } catch (error) {
        console.log(error);
    }
}
export function* postPrdoucts() {
    try {
        console.log('Lấy dữ liệu products từ API');
        let listProducts = yield call(productServices.getProducts);

        yield put(actions.fetchProduct(listProducts))
    } catch (error) {
        
    }
}