import * as types from '../constants/ActionType';

export const counter = (sate = 0, action) => {
    switch(action.type) {
        case types.ACT_UP:
            return sate + 1;
        case types.ACT_DOWN:
            return sate - 1;
        default:
            return sate;
    }
}