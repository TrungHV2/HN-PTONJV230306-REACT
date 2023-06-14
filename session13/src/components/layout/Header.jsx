import React from 'react'
import Navbar from './Navbar'

export default function Header() {
    return (
        <>
            {/* Start header */}
            <header>
                {/* Start top call-to acction */}
                <div className="top-bar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="top-call-to-acction">
                                    <p>
                                        <a href="tel:0123-456-789">
                                            <i className="fa fa-phone" /> Call us now: 0123-456-789
                                        </a>
                                        <a href="mailto:admin@bootexperts.com">
                                            <i className="fa fa-envelope-o" /> E-mail:
                                            admin@bootexperts.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                                <div className="social-and-menu">
                                    <div className="top-menu">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        English <i className="fa fa-caret-down" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">English</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Français</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        USD <i className="fa fa-caret-down" />
                                                    </a>
                                                    <ul>
                                                        <li>
                                                            <a href="#">Dollar (USD)</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Pound (GBP)</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="top-social">
                                        <p>
                                            <a href="https://www.facebook.com/">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="https://twitter.com/">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="https://www.rss.com/">
                                                <i className="fa fa-rss" />
                                            </a>
                                            <a href="https://www.youtube.com/">
                                                <i className="fa fa-youtube" />
                                            </a>
                                            <a href="https://plus.google.com/">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="https://www.pinterest.com/">
                                                <i className="fa fa-pinterest" />
                                            </a>
                                            <a href="www.vimeo.com/‎">
                                                <i className="fa fa-vimeo-square" />
                                            </a>
                                            <a href="https://instagram.com/">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End top call-to acction */}
                {/* Start logo and search area */}
                <div className="logo-and-search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-9 col-md-9">
                                {/* Start user info adn search */}
                                <div className="user-info-adn-search">
                                    <div className="user-info">
                                        <p>
                                            <a href="#">
                                                <i className="fa fa-user" /> My Account
                                            </a>
                                            <a href="wishlists.html">
                                                <i className="fa fa-heart-o" /> Wishlist
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-key" /> Sign out
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-signal" /> Compare
                                            </a>
                                        </p>
                                    </div>
                                    <div className="search-and-cart">
                                        <div className="search-categori">
                                            <div className="categori">
                                                <form
                                                    id="select-categoris"
                                                    method="post"
                                                    className="form-horizontal"
                                                >
                                                    <select name="language">
                                                        <option value="">Categories</option>
                                                        <option value={12}>Automotive</option>
                                                        <option value={21}>electronic </option>
                                                        <option value={25}>Camera</option>
                                                        <option value={26}>Electronic </option>
                                                        <option value={27}>Cosmetic </option>
                                                        <option value={28}>Medical</option>
                                                        <option value={29}>Laptop</option>
                                                        <option value={30}>Phasellus</option>
                                                        <option value={22}>mobile</option>
                                                        <option value={31}>Camcorders </option>
                                                        <option value={32}>Electronic </option>
                                                        <option value={33}>Cosmetic </option>
                                                        <option value={34}>Laptop</option>
                                                        <option value={35}>Medical</option>
                                                        <option value={36}>Phasellus</option>
                                                        <option value={23}>laptop </option>
                                                        <option value={37}>Phasellus</option>
                                                        <option value={38}>Healthcare </option>
                                                        <option value={39}>Electronic </option>
                                                        <option value={40}>Cosmetic </option>
                                                        <option value={13}>Electronics </option>
                                                        <option value={24}>camcorder </option>
                                                        <option value={46}>Healthcare </option>
                                                        <option value={47}>Laptop</option>
                                                        <option value={48}>Camera</option>
                                                        <option value={41}>Medical</option>
                                                        <option value={49}>Camera</option>
                                                        <option value={50}>Camcorders</option>
                                                        <option value={51}>Camcorders</option>
                                                        <option value={42}>Healthcare</option>
                                                        <option value={52}>Medical</option>
                                                        <option value={53}>Healthcare</option>
                                                        <option value={54}>Healthcare </option>
                                                        <option value={14}>Sports</option>
                                                        <option value={43}>category 1</option>
                                                        <option value={60}>day </option>
                                                        <option value={61}>evening </option>
                                                        <option value={62}>night </option>
                                                        <option value={44}>category 2 </option>
                                                        <option value={63}>kids </option>
                                                        <option value={64}>men </option>
                                                        <option value={65}>Women </option>
                                                        <option value={45}>category 3 </option>
                                                        <option value={66}>clothing </option>
                                                        <option value={67}>Accessories </option>
                                                        <option value={15}>Smartphone</option>
                                                        <option value={55}>category 1 </option>
                                                        <option value={56}>category 2 </option>
                                                        <option value={57}>category 3 </option>
                                                        <option value={16}>Beauty </option>
                                                        <option value={58}>category 1 </option>
                                                        <option value={59}>category 2 </option>
                                                        <option value={17}>Bags, Shoes</option>
                                                        <option value={18}>Networking </option>
                                                        <option value={19}>Accessories </option>
                                                        <option value={20}>Entertainment </option>
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="search-box">
                                                <form action="#">
                                                    <input
                                                        type="text"
                                                        className="form-control input-sm"
                                                        maxLength={64}
                                                        placeholder="Enter your search key ... "
                                                    />
                                                    <button type="submit">Search</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="shoping-cart">
                                            <a href="cart.html">
                                                <span>My Cart (3)</span>
                                            </a>
                                            <div className="add-to-cart-product">
                                                <div className="cart-product product-item11">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="img/cart/faded-short-sleeves-tshirt.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p>
                                                            <span>1</span>x
                                                            <a href="single-product.html">Faded...</a>
                                                        </p>
                                                        <a href="single-product.html">S, Orange</a>
                                                        <span className="price">£ 19.81</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times" />
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html">
                                                            <img src="img/cart/printed-dress.jpg" alt="Product" />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p>
                                                            <span>1</span>x
                                                            <a href="single-product.html">blouse</a>
                                                        </p>
                                                        <a href="single-product.html">S, Black</a>
                                                        <span className="price">£ 32.40</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times" />
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html">
                                                            <img
                                                                src="img/cart/printed-summer-dress.jpg"
                                                                alt="Product"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p>
                                                            <span>1</span>x
                                                            <a href="single-product.html">Printed...</a>
                                                        </p>
                                                        <a href="single-product.html">S, Yellow</a>
                                                        <span className="price">£ 36.60</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times" />
                                                    </div>
                                                </div>
                                                <div className="cart-price">
                                                    <div className="cart-product-line fast-line">
                                                        <span>Shipping</span>
                                                        <span className="free-shiping">$10.50</span>
                                                    </div>
                                                    <div className="cart-product-line">
                                                        <span>Total</span>
                                                        <span className="total">£ 88.81</span>
                                                    </div>
                                                </div>
                                                <div className="cart-checkout">
                                                    <a href="checkout.html">
                                                        Check out
                                                        <i className="fa fa-chevron-right" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End user info adn search */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End logo and search area */}
                <Navbar />
            </header>
            {/* End header */}
        </>
    )
}
