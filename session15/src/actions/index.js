import * as types from '../constants/action-type';

export const getProduct = () => {
    return {
        type: types.ACT_GET_PRODUCT
    }
}
export const postProduct = (newProduct) => {
    return {
        type: types.ACT_GET_PRODUCT,
        payload: newProduct
    }
}

export const fetchProduct = (data) => {
    return {
        type: types.ACT_FETCH_PRODUCT,
        payload: data
    }
}
