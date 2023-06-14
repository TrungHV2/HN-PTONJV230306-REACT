import * as types from '../util/ActionType';

export const addToCart = (data) => {
    return {
        type: types.ADD_CART,
        payload: data
    }
}
export const removeCart = (data) => {
    return {
        type: types.REMOVE_CART,
        payload: data
    }
}
export const updateCart = (data) => {
    return {
        type: types.UPDATE_CART,
        payload: data
    }
}