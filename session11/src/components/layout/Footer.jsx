import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Start footer */}
            <footer>
                {/* Start footer top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            {/* Start footer top box */}
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-phone-square" />
                                    <a href="tel:+-0123-456-789">+ 0(123) 456 789</a>
                                    <p>Order by phone</p>
                                </div>
                            </div>
                            {/* End footer top box */}
                            {/* Start footer top box */}
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-clock-o" />
                                    <span>Working time</span>
                                    <p>Mon - sun: 8.00 - 18.00</p>
                                </div>
                            </div>
                            {/* End footer top box */}
                            {/* Start footer top box */}
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box">
                                    <i className="fa fa-paper-plane" />
                                    <span>Free shipping</span>
                                    <p>on order over $199</p>
                                </div>
                            </div>
                            {/* End footer top box */}
                            {/* Start footer top box */}
                            <div className="col-xs-12 col-sm-3">
                                <div className="footer-top-box last">
                                    <i className="fa fa-history" />
                                    <span>Money back 100%</span>
                                    <p>Within 30 days affter delivery</p>
                                </div>
                            </div>
                            {/* End footer top box */}
                        </div>
                    </div>
                </div>
                {/* End footer top */}
                {/* Start footer medil */}
                <div className="footer-medil">
                    <div className="container">
                        <div className="row">
                            {/* Start footer categori */}
                            <div className="col-xs-12 col-sm-8">
                                <div className="footer-categori">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Automotive &amp; Motorcycle
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Electronics
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Sports &amp; Outdoors
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Smartphone &amp; Tablets
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Health &amp; Beauty
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Bags, Shoes &amp; Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Computers &amp; Networking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Laptops &amp; Accessories
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-star" /> Entertainment
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End footer categori */}
                            {/* Start footer search area */}
                            <div className="col-xs-12 col-sm-4">
                                <div className="footer-search-area">
                                    <h4>Newsletter</h4>
                                    <form method="post" action="#">
                                        <div className="form-group">
                                            <button
                                                className="submitNew"
                                                name="submitNewsletter"
                                                type="submit"
                                            >
                                                <i className="fa fa-envelope" />
                                            </button>
                                            <input
                                                type="text"
                                                defaultValue="Enter your e-mail"
                                                size={18}
                                                name="email"
                                                id="newsletter-input"
                                                className="inputNew form-control grey newsletter-input"
                                            />
                                        </div>
                                    </form>
                                    <div className="hiring">
                                        <div className="img_in">
                                            <img alt="icon" src="img/hire_logo.jpg" />
                                        </div>
                                        <div className="info">
                                            <h4>we’re hiring!</h4>
                                            <p>
                                                Click <a href="#">here</a> for more information
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End footer search area */}
                        </div>
                        {/* Start footer medil information */}
                        <div className="footer-medil-information">
                            <div className="row">
                                <div className="col-xs-12 col-sm-3">
                                    <div className="info-box">
                                        <h4>Store Information</h4>
                                        <ul>
                                            <li>My Company</li>
                                            <li>Paris - France</li>
                                            <li>0123-456-789</li>
                                            <li>
                                                <a href="mailto:admin@bootexperts.com">
                                                    admin@bootexperts.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="info-box">
                                        <h4>Information</h4>
                                        <ul>
                                            <li className="item">
                                                <a title="Specials" href="">
                                                    Specials
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="New products" href="">
                                                    {" "}
                                                    New products
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Best sellers" href="">
                                                    {" "}
                                                    Best sellers
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Contact us" href="contact-us.html">
                                                    Contact us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="info-box">
                                        <h4>
                                            <a href="#">My account</a>
                                        </h4>
                                        <ul>
                                            <li className="item">
                                                <a title="Specials" href="">
                                                    My orders
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="New products" href="">
                                                    {" "}
                                                    My credit slips
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Best sellers" href="">
                                                    {" "}
                                                    My addresses
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Contact us" href="">
                                                    My personal info
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="info-box">
                                        <h4>extra link</h4>
                                        <ul>
                                            <li className="item">
                                                <a title="Specials" href="">
                                                    gift cards
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="New products" href="">
                                                    e- gift cards
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Best sellers" href="">
                                                    corporate gift cards
                                                </a>
                                            </li>
                                            <li className="item">
                                                <a title="Contact us" href="">
                                                    check balance
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End footer medil information */}
                    </div>
                </div>
                {/* End footer medil */}
                {/* Start footer copyright */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="copyright-text">
                                    <p>
                                        Copyright © 2015{" "}
                                        <a href="http://bootexperts.com">BootExperts</a>. All rights
                                        reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="footer-card pull-right">
                                    <img src="img/payment.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End footer copyright */}
            </footer>
            {/* End footer */}
        </>
    )
}
