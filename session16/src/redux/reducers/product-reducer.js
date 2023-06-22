import * as types from '../constants/action-type'

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case types.GET_PRODUCT_DONE:
            return [...action.payload]
        default:
            return state;
    }
}