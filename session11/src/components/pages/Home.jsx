import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home({ onAddCart }) {
    const featureItemOptions = {
        items : 5,
        nav: true,
        navText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
    }

    const handleAddToCart = (evt) => {
        console.log(evt);
        evt.preventDefault();
    }

    return (
        <>
            {/* Start purches progress */}
            <div className="purches-progress-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Purchase progress</h3>
                            </div>
                        </div>
                        <div className="progress-area">
                            <div className="col-sm-3">
                                <div className="progrtee-box icon">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon1">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon2">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon3">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End purches progress */}
            {/* Start featured product */}
            <div className="featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Featured Products</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <OwlCarousel className='featured-item owl-theme' {...featureItemOptions}>
                                {/* Start featured item */}
                                <div className="col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img
                                                    src="img/product/faded-short-sleeves-tshirt.jpg"
                                                    alt=""
                                                />
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
                                                <a href="cart.html" onClick={handleAddToCart} className="add-to-card">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/blouse.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Blouse</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$27.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress1.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$50.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$28.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$30.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$306.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$120.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$20.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$30.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
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
                                {/* End featured item */}
                            </OwlCarousel>
                            {/* <div className="featured-item">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End featured product */}
            {/* Start two banner area */}
            <div className="two-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-left">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms14.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-right">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms15.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End two banner area */}
            {/* Start best sellar area */}
            <div className="best-sellar-area featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>BESTSELLER</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <div className="featured-item">
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img
                                                    src="img/product/faded-short-sleeves-tshirt.jpg"
                                                    alt=""
                                                />
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
                                                <a href="cart.html" className="add-to-card">
                                                    <i className="fa fa-shopping-cart" />
                                                    Add to cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/blouse.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Blouse</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$27.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress1.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$50.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$28.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$30.00</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$306.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$120.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$20.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$30.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
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
                                {/* End featured item */}
                                {/* Start featured item */}
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
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
                                {/* End featured item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End best sellar area */}
            {/* Start camera and cosmatic area */}
            <div className="camera-and-cosmatic-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Camera &amp; Camcorders</h3>
                            </div>
                            <div className="camera-area">
                                <p className="extra-link">
                                    <a href="#">
                                        <i className="fa fa-bar-chart" />
                                        10 products here
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-star-o" />
                                        View more in category
                                    </a>
                                </p>
                                <div className="row">
                                    <div className="camera-slide featured-product-area">
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress10.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dressw.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress12.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress13.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Cosmetic</h3>
                            </div>
                            <div className="cosmatic-area">
                                <p className="extra-link">
                                    <a href="#">
                                        <i className="fa fa-bar-chart" />
                                        10 products here
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-star-o" />
                                        View more in category
                                    </a>
                                </p>
                                <div className="row">
                                    <div className="camera-slide featured-product-area">
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress12.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress13.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dress10.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product/printed-chiffon-dressw.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </span>
                                                </p>
                                                <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End camera and cosmatic area */}
            {/* Start popular tab categori */}
            <div className="popular-tab-categori">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Popular categories</h3>
                            </div>
                        </div>
                        <div id="content" className="tab-menu-slide">
                            <ul id="tabs" className="popular-tab-menu" data-tabs="tabs">
                                <li className="active">
                                    <a href="#tab1" data-toggle="tab">
                                        <i className="fa fa-laptop" />
                                        <h3>Electronic</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab2" data-toggle="tab">
                                        <i className="fa fa-mobile" />
                                        <h3>Cosmetic</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab3" data-toggle="tab">
                                        <i className="fa fa-plug" />
                                        <h3>Medical &amp; Healthcare</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab4" data-toggle="tab">
                                        <i className="fa fa-microphone" />
                                        <h3>Laptop &amp; Computer</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab5" data-toggle="tab">
                                        <i className="fa fa-gamepad" />
                                        <h3>Phasellus laoreet</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab6" data-toggle="tab">
                                        <i className="fa fa-camera-retro" />
                                        <h3>mobile &amp; tablet</h3>
                                    </a>
                                </li>
                            </ul>
                            <div id="my-tab-content" className="tab-content row">
                                {/* Start popular tab product */}
                                <div className="tab-pane active" id="tab1">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab2">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab3">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab4">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab5">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab6">
                                    <div className="popular-tab-product featured-product-area">
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-summer-dress.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">
                                                        Faded Short Sleeves T-shirt
                                                    </a>
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
                                                        <a href="cart.html" className="add-to-card">
                                                            <i className="fa fa-shopping-cart" />
                                                            Add to cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress8.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dresst.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress10.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dressw.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress12.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                        {/* Start featured item */}
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img
                                                            src="img/product/printed-chiffon-dress13.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
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
                                        {/* End featured item */}
                                    </div>
                                </div>
                                {/* End popular tab product */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End popular tab categori */}
            {/* Start brand and client */}
            <div className="brand-and-client">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>BRAND &amp; CLIENTS</h3>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="brand-logo featured-product-area">
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/5.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/6.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="clients">
                                    <a href="#">
                                        <img src="img/brand-logo/4.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End brand and client */}
            {/* Start blog area */}
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>The Blog</h3>
                            </div>
                        </div>
                        <div className="blog-box featured-product-area">
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html">
                                    <img src="img/blog/4-home-default.jpg" alt="" />
                                </a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3>
                                        <a href="single-blog.html">Share the Love for PrestaShop 1.6</a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been...
                                    </p>
                                    <a href="single-blog.html" className="readmore">
                                        Read more
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html">
                                    <img src="img/blog/3-home-default.jpg" alt="" />
                                </a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3>
                                        <a href="single-blog.html">
                                            Answers to your Questions about PrestaShop
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been...
                                    </p>
                                    <a href="single-blog.html" className="readmore">
                                        Read more
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html">
                                    <img src="img/blog/2-home-default.jpg" alt="" />
                                </a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3>
                                        <a href="single-blog.html">
                                            What is Bootstrap? – The History and the Hype
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been...
                                    </p>
                                    <a href="single-blog.html" className="readmore">
                                        Read more
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html">
                                    <img src="img/blog/1-home-default.jpg" alt="" />
                                </a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3>
                                        <a href="single-blog.html">
                                            From Now we are certified web agency
                                        </a>
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been...
                                    </p>
                                    <a href="single-blog.html" className="readmore">
                                        Read more
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End blog area */}
        </>
    )
}
