import { call, put } from 'redux-saga/effects'
import * as productService from '../../services/product-service';
import * as actions from '../actions';
import * as types from '../constants/action-type'

export function* fetchProduct() {
    try {
        let listProducts = yield call(productService.getProducts);
        yield put(actions.productAction(types.GET_PRODUCT_DONE, listProducts));
    } catch (error) {
        console.log(error);
    }
}
export function* fetchProductDetail(action) {
    try {
        let product = yield call(productService.getProduct, action.payload);
        yield put(actions.productAction(types.GET_PRODUCT_DETAIL_DONE, product));
    } catch (error) {
        console.log(error);
    }
}