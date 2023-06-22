import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as types from '../../redux/constants/action-type'
import * as actions from '../../redux/actions'


export default function ProductDetail() {
    const [isMount, setIsMount] = useState(false);
    const productDetail = useSelector(s => s.product);

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(params);
        dispatch(actions.productAction(types.GET_PRODUCT_DETAIL, params.id))
        return () => {

        }
    }, [isMount])

    return (
        <div>ProductDetail {productDetail.id} | {productDetail.productName}</div>
    )
}
