import React from 'react';
import NivoSlider from './NivoSlider';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductItem from '../shared/ProductItem';

export default function Home() {
    const slideProductOptions = {
        items: 2,
        nav: true,
        dots: false,
        navText: [
            '<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>',
            '<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'
        ]
    }
    const featuredItemOptions = {
        items: 5,
        nav: true,
        dots: false,
        navText: [
            '<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>',
            '<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'
        ]
    }

    return (
        <>
            <NivoSlider />
            {/* Start categori area */}
            <div className="categori-area">
                <div className="container">
                    <div className="row">
                        {/* Start categori menu */}
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="categori-menu">
                                <div className="sidebar-menu-title">
                                    <h2>
                                        <i className="fa fa-th-list" />
                                        Categories
                                    </h2>
                                </div>
                                <div className="sidebar-menu">
                                    <ul>
                                        <li>
                                            <a href="shop-grid.html">Automotive &amp; Motorcycle</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>electronic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camera &amp; Camcorders</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Electronic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Cosmetic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical &amp; Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Laptop &amp; Computer</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Phasellus laoreet</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>electronic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camera &amp; Camcorders</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Electronic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Cosmetic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical &amp; Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Laptop &amp; Computer</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Phasellus laoreet</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>laptop</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Phasellus laoreet</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical &amp; Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Electronic</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Cosmetic</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">Electronics</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>camera &amp; camcorder</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical &amp; Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Laptop &amp; Computer</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camera</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>Medical</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camera</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camcorders</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Camera &amp; Camcorders</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Healthcare</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Medical &amp; Healthcare</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">Sports &amp; Outdoors</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>category 1</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>day</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>evening</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>night</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>category 2</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>kids</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>men</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Women</span>
                                                        </a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title">
                                                            <span>category 3</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>clothing</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>Accessories</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">Smartphone &amp; Tablets</a>
                                            <div className="megamenudown-sub mini">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html">
                                                            <span>category 1</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>category 2</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>category 3</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html">Health &amp; Beauty</a>
                                            <div className="megamenudown-sub mini">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html">
                                                            <span>category 1</span>
                                                        </a>
                                                        <a href="shop-grid.html">
                                                            <span>category 2</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html" className="single-menu">
                                                Bags, Shoes &amp; Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html" className="single-menu">
                                                Computers &amp; Networking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html" className="single-menu">
                                                Laptops &amp; Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <a href="shop-grid.html" className="single-menu">
                                                Entertainment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End categori menu */}
                        {/* Start categori banner */}
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <div className="categori-banner">
                                <div className="banner-left">
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms11.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms12.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-right">
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms13.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End categori banner */}
                        {/* Start categori slide product */}
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="categori-slide-product">
                                <div className="slide-product-title">
                                    <h3>sale off</h3>
                                </div>
                                <OwlCarousel className='slide-product owl-theme' {...slideProductOptions}>
                                    {/* Start slide product item */}
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-summer-dress1.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-5%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress3.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">printed chiffon dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress5.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End slide product item */}
                                    {/* Start slide product item */}
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress2.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress4.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress6.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End slide product item */}
                                    {/* Start slide product item */}
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress7.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress11.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress10.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End slide product item */}
                                    {/* Start slide product item */}
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress8.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress4.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img
                                                        src="img/product-mini/printed-chiffon-dress12.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End slide product item */}
                                </OwlCarousel>
                            </div>
                        </div>
                        {/* End categori slide product */}
                    </div>
                </div>
            </div>
            {/* End categori area */}
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
                            <OwlCarousel className='featured-item owl-theme' {...featuredItemOptions}>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <ProductItem />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* End featured product */}
        </>
    )
}
