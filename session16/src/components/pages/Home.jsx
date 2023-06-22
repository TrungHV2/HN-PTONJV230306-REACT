import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../../redux/constants/action-type'
import * as actions from '../../redux/actions'
import { NavLink } from 'react-router-dom';

export default function Home() {
    const [isMount, setIsMount] = useState(false);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isMount) {
            console.log('componentDidMount')
            dispatch(actions.productAction(types.GET_PRODUCT, null))
            return () => {
                console.log('componentWillUnmount')
            }
        } else {
            setIsMount(true);
        }
    }, [isMount])

    const addToCart = (product) => {
        dispatch(actions.cartAction(types.CART_ADD, product));
    }


    return (
        <div>
            Home
            <ul>
                {products.map(p => <li key={p.id}>
                    {p.productName} | {p.price}
                    <NavLink to={'product-detail/' + p.id}>Chi tiết</NavLink>
                    <button onClick={e => addToCart(p)}>Mua</button>
                </li>)}
            </ul>
        </div>
    )
}
