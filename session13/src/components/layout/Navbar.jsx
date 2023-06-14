import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            {/* Start mainmenu-area */}
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="mainmenu">
                            <nav>
                                <ul>
                                    <li>
                                        <NavLink className={'home'} to={'/'}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/shop'}>Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/cart'}>Cart</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* End mainmenu-area */}
            {/* Start mobile menu */}
            <div className="mobile-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 np">
                            <div className="mobile-menu">
                                <nav id="dropdown">
                                    <ul className="nav">
                                        <li>
                                            <a className="home" href="index.html">
                                                Home
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="index-2.html">
                                                        <span>Home2</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">
                                                        <span>Home3</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">
                                                        <span>Home4</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about-us.html">About us</a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">shop</a>
                                        </li>
                                        <li>
                                            <a href="#">Delivery</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                            <ul>
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-non-sidebar.html">Blog non sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="single-blog.html">Single blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="about-us.html">
                                                        <span>About us</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">
                                                        <span>Blog</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-non-sidebar.html">
                                                        <span>blog non sidebar</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-blog.html">
                                                        <span>single blog</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-grid.html">
                                                        <span>shop grid</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="shop-list.html">
                                                        <span>shop list</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="single-product.html">
                                                        <span>single product</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="cart.html">
                                                        <span>cart</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="wishlists.html">
                                                        <span>wishlists</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="checkout.html">
                                                        <span>checkout</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact-us.html">
                                                        <span>contact us</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="404.html">
                                                        <span>404</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact-us.html">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End mobile menu */}
        </>
    )
}
