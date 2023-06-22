import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions';
import { useCallback, useEffect } from 'react';

export default function Product() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleLoad = useCallback(() => {
        dispatch(actions.getProduct())
    })

    // useEffect(() => {
    //     dispatch(actions.getProduct())
    // }, [])

    return (
        <div>
            <table border={1} cellPadding={7} cellSpacing={0} width={'100%'}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.image}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
