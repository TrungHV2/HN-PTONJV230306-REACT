import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as types from '../../redux/constants/action-type'
import * as actions from '../../redux/actions'
import { NavLink } from 'react-router-dom';

import { storage } from '../../config/firebase-config'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';

export default function Home() {
    //#region
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

    //#endregion
    const [file, setFile] = useState();
    const [urlUploaded, setUrlUploaded] = useState();

    const handleUpload = async () => {
        if (file) { // Nếu đã chọn file rồi
            // Tạo tham chiếu tới nơi file sẽ được tải lên
            const storageRef = ref(storage, `/files/${file.name}`);
            // Tải file lên firebase
            let response = await uploadBytes(storageRef, file);
            console.log(response);
            // Lấy đường dẫn file được tải lên
            let imageUrlUploaded = await getDownloadURL(response.ref);
            setUrlUploaded(imageUrlUploaded);
        }
    }

    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={e => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
            <img src={urlUploaded} alt="" />
            <h1>Upload File End</h1>

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
