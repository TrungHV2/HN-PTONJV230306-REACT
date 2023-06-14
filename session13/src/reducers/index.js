import { combineReducers } from 'redux';
import { carts } from './cart';

/**
 * Class component
 * this.state = {
 *  carts: []
 * }
 */
export const reducers = combineReducers({
    carts,
})