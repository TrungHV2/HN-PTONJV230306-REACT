import { combineReducers } from 'redux'
import { counter } from './couter';

export const allReducers = combineReducers({
    counter,
    // add more reducers
})