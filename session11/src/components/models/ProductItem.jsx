import React from 'react'

export default function ProductItem({ classItem, product }) {
    return (
        <>
            <div className={classItem}>
                <div className="featured-inner">
                    <div className="featured-image">
                        <a href="single-product.html">
                            <img src={product.image} alt="" />
                        </a>
                    </div>
                    <div className="featured-info">
                        <a href="single-product.html">{product.name}</a>
                        <p className="reating">
                            <span className="rate">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </span>
                        </p>
                        <span className="price">${product.price}</span>
                        <div className="featured-button">
                            <a href="wishlists.html" className="wishlist">
                                <i className="fa fa-heart" />
                            </a>
                            <a href="#" className="fetu-comment">
                                <i className="fa fa-signal" />
                            </a>
                            <a href="cart.html" className="add-to-card">
                                <i className="fa fa-shopping-cart" />
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
