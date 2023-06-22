import * as types from '../constants/action-type'

export const productAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}
export const cartAction = (action, data) => {
    return {
        type: action,
        payload: data
    }
}