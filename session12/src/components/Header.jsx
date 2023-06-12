import React from 'react'
import { useSelector } from 'react-redux';

export default function Header() {
    const counter = useSelector(state => state.counter);
    return (
        <div>
            <h1>Header | Counter: {counter}</h1>
        </div>
    )
}
