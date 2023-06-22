import { combineReducers } from 'redux';
import { productReducer } from './product-reducer';
import * as types from '../constants/action-type';
import { cartReducer } from './cart-reducer';

export const reducers = combineReducers({
    products: productReducer,
    product: (state = {}, action) => {
        switch (action.type) {
            case types.GET_PRODUCT_DETAIL_DONE:
                return {...action.payload}
            default:
                return state;
        }
    },
    users: [],
    carts: cartReducer
})