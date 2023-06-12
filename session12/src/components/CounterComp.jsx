import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';

export default function CounterComp() {
    const counter = useSelector(sate => sate.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter Component</h1>
            <button onClick={e => dispatch(actions.increment())}>UP</button>
            <button onClick={e => dispatch(actions.increment())}>DOWN</button>
        </div>
    )
}
