import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from '../layout/BannerSlide';
import OwlSlide from '../layout/OwlSlide';

export default function Home() {
    const products = [
        {
            id: 'SP01',
            name: 'Faded Short Sleeves T-shirt',
            image: 'img/product/faded-short-sleeves-tshirt.jpg',
            price: 16.51
        },
        {
            id: 'SP02',
            name: 'Blouse',
            image: 'img/product/blouse.jpg',
            price: 27.00
        },
        {
            id: 'SP03',
            name: 'Printed Dress',
            image: 'img/product/printed-dress1.jpg',
            price: 26.00
        },
        {
            id: 'SP04',
            name: 'Printed Dress',
            image: 'img/product/printed-dress2.jpg',
            price: 50.00
        },
        {
            id: 'SP05',
            name: 'Printed Summer Dress',
            image: 'img/product/printed-summer-dress4.jpg',
            price: 28.00
        },
        {
            id: 'SP06',
            name: 'Printed Summer Dress',
            image: 'img/product/printed-summer-dress.jpg',
            price: 30.00
        },
        {
            id: 'SP07',
            name: 'Printed Chiffon Dress',
            image: 'img/product/printed-chiffon-dress1.jpg',
            price: 16.40
        },
        {
            id: 'SP08',
            name: 'Printed Chiffon Dress',
            image: 'img/product/printed-chiffon-dress4.jpg',
            price: 16.40
        },
        {
            id: 'SP09',
            name: 'Printed Chiffon Dress',
            image: 'img/product/printed-chiffon-dress8.jpg',
            price: 16.40
        },
        {
            id: 'SP10',
            name: 'Printed Chiffon Dress',
            image: 'img/product/printed-chiffon-dress5.jpg',
            price: 306.40
        },
    ]

    const prevText = '<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>';
    const nextText = '<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>';

    const featureItemOptions = {
        items : 5,
        nav: true,
        navText : [prevText,nextText] 
    }
    const cameraSlideOptions = {
        items : 2,
        dots: false,
        nav: true,
        navText : [prevText,nextText]  
    }
    const brandSlideOptions = {
        items : 6,
        dots: false,
        nav: true,
        navText : [prevText,nextText]  
    }
    const slideProductOptions = {
        items : 2,
        loop: true,
        nav: true,
        navText : [prevText,nextText]  
    }
    return (
        <>
            <Slider />
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
                                <OwlCarousel className="slide-product" {...slideProductOptions}>
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
                            <OwlSlide items={products} options={featureItemOptions} className={'featured-item owl-theme'} classItem={'col-sm-3'} />
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
                            <OwlSlide items={products} options={featureItemOptions} className={'featured-item owl-theme'} classItem={'col-xs-12 col-sm-3'} />
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
                                    <OwlSlide items={products} options={cameraSlideOptions} className={'camera-slide featured-product-area owl-theme'} classItem={''} />
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
                                    <OwlSlide items={products} options={cameraSlideOptions} className={'camera-slide featured-product-area owl-theme'} classItem={''} />
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
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab2">
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab3">
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab4">
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab5">
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
                                </div>
                                {/* End popular tab product */}
                                {/* Start popular tab product */}
                                <div className="tab-pane" id="tab6">
                                    <OwlSlide items={products} options={featureItemOptions} className={'popular-tab-product featured-product-area owl-theme'} classItem={'col-sm-3'} />
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
