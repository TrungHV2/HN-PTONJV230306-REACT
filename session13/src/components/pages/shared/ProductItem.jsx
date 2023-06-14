import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../actions';

export default function ProductItem() {
    const dispatch = useDispatch();

    const buyClick = () => {
        dispatch(addToCart({
            productId: 'SP01',
            quantity: 1
        }));
    }

    return (
        <>
            <div className="featured-inner">
                <div className="featured-image">
                    <a href="single-product.html">
                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                    </a>
                </div>
                <div className="featured-info">
                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                    <p className="reating">
                        <span className="rate">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </span>
                    </p>
                    <span className="price">$16.51</span>
                    <div className="featured-button">
                        <a href="wishlists.html" className="wishlist">
                            <i className="fa fa-heart" />
                        </a>
                        <a href="#" className="fetu-comment">
                            <i className="fa fa-signal" />
                        </a>
                        <a href="javascript:void(0)" onClick={buyClick} className="add-to-card">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
