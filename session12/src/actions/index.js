import * as types from '../constants/ActionType';

export const increment = () => {
    return {
        type: types.ACT_UP
    }
}
export const decrement = () => {
    return {
        type: types.ACT_DOWN
    }
}