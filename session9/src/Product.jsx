import React from 'react'
import { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export default function Product() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        if (name !== 'TV1') {
            setProducts([...products, {
                name: name,
                price: +price
            }]);
            setName('');
            setPrice('');
    
            nameRef.current.focus();
        }
    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log("tính lại");
            return result + prod.price
        }, 0)
        return result;
    }, [products]);

    return (
        <div>
            <input type='text' ref={nameRef} defaultValue={name} 
            onChange={e => setName(e.target.value)} /><br/>
            <input type='text' defaultValue={price} 
            onChange={e => setPrice(e.target.value)} /><br/>

            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <h3>Total: {total}</h3>

            <ul>
                {products.map((p, idx) => <li key={idx}>{p.name} | {p.price}</li>)}
            </ul>
        </div>
    )
}
