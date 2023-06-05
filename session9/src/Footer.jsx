import React from 'react';
import { MyContext } from './App';
import { useContext } from 'react';

export default function Footer() {
    const { handleContext } = useContext(MyContext);
    return (
        <div>
            <h1>Footer</h1>
            <button onClick={handleContext}>Click</button>
        </div>
    )
}
