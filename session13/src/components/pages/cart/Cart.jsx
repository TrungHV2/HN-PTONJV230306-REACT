import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    // Lấy giỏ hàng từ store
    const carts = useSelector(state => state.carts);

    useEffect(() => {
        // componentDidMount
        console.log('componentDidMount');

        // componentWillUnmount
        return () => {
            console.log('componentWillUnmount');
        }
    }, [])

    return (
        <>
            {/* Start page content */}
            <div className="page-content section">
                {/* Start breadcume area */}
                <div className="breadcume-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb">
                                    <a title="Return to Home" href="index.html" className="home">
                                        <i className="fa fa-home" />
                                    </a>
                                    <span className="navigation-pipe">&gt;</span>
                                    <a title="Automotive & Motorcycle" href="index.html">
                                        My account
                                    </a>
                                    <span className="navigation-pipe">&gt;</span>
                                    Shopping cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End breadcume area */}
                <div className="cart-page-content section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h4 className="cart-title">Shopping cart</h4>
                                <div className="table-responsive">
                                    <table className="cart-table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Product name</th>
                                                <th />
                                                <th>Unit Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="single-product.html">
                                                        <img
                                                            alt=""
                                                            className="img-responsive"
                                                            src="img/product/faded-short-sleeves-tshirt.jpg"
                                                        />
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>
                                                        <a href="single-product.html">Printed Chiffon Dress</a>
                                                    </h6>
                                                </td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                                <td>
                                                    <div className="cart-price">$50.00</div>
                                                </td>
                                                <td>
                                                    <form>
                                                        <input type="text" placeholder={1} />
                                                    </form>
                                                </td>
                                                <td>
                                                    <div className="cart-subtotal">$50.00</div>
                                                </td>
                                                <td>
                                                    <i className="fa fa-trash" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="single-product.html">
                                                        <img
                                                            alt=""
                                                            className="img-responsive"
                                                            src="img/product/printed-chiffon-dressac.jpg"
                                                        />
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>
                                                        <a href="single-product.html">Blouse</a>
                                                    </h6>
                                                </td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                                <td>
                                                    <div className="cart-price">$32.40</div>
                                                </td>
                                                <td>
                                                    <form>
                                                        <input type="text" placeholder={1} />
                                                    </form>
                                                </td>
                                                <td>
                                                    <div className="cart-subtotal">$32.40</div>
                                                </td>
                                                <td>
                                                    <i className="fa fa-trash" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="single-product.html">
                                                        <img
                                                            alt=""
                                                            className="img-responsive"
                                                            src="img/product/printed-summer-dress.jpg"
                                                        />
                                                    </a>
                                                </td>
                                                <td>
                                                    <h6>
                                                        <a href="single-product.html">Printed Summer Dress</a>
                                                    </h6>
                                                </td>
                                                <td>
                                                    <a href="#">Edit</a>
                                                </td>
                                                <td>
                                                    <div className="cart-price">$36.60</div>
                                                </td>
                                                <td>
                                                    <form>
                                                        <input type="text" placeholder={1} />
                                                    </form>
                                                </td>
                                                <td>
                                                    <div className="cart-subtotal">$36.60</div>
                                                </td>
                                                <td>
                                                    <i className="fa fa-trash" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={7} className="actions">
                                                    <div className="cartPage-btn">
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="cbtn">
                                                                    Continue Shopping
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="cbtn">
                                                                    UPDATE SHOPPING CART
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="cbtn">
                                                                    CLEAR SHOPPING CART
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* start cart discount code area */}
                            <div className="col-lg-12">
                                <div className="cart-discount-code-area">
                                    <h2>Discount codes</h2>
                                    <p>Enter your coupon code if you have one.</p>
                                    <input type="text" />
                                    <a href="#">Apply coupon</a>
                                </div>
                            </div>
                            {/* End cart discount code area */}
                        </div>
                        <div className="row">
                            {/* Start Stmate shoping and cart */}
                            <div className="col-lg-12">
                                <div className="Stmate-shoping-and-cart">
                                    <h2>Estimate Shipping and Tax</h2>
                                    <p>Enter your destination to get a shipping estimate.</p>
                                    <form>
                                        <div className="shippingTitle">
                                            <p>
                                                <span>*</span>Country
                                            </p>
                                        </div>
                                        <div className="selectOption">
                                            <div className="selectParent">
                                                <select>
                                                    <option value="">Please Select</option>
                                                    <option value={1}>Country 1</option>
                                                    <option value={2}>Country 2</option>
                                                    <option value={1}>Country 3</option>
                                                    <option value={2}>Country 4</option>
                                                    <option value={1}>Country 5</option>
                                                    <option value={2}>Country 6</option>
                                                    <option value={1}>Country 7</option>
                                                    <option value={2}>Country 8</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="shippingTitle">
                                            <p>State/Province</p>
                                        </div>
                                        <div className="selectOption">
                                            <div className="selectParent">
                                                <select>
                                                    <option value="">Please Select</option>
                                                    <option value={1}>Region 1</option>
                                                    <option value={2}>Region 2</option>
                                                    <option value={1}>Region 3</option>
                                                    <option value={2}>Region 4</option>
                                                    <option value={1}>Region 5</option>
                                                    <option value={2}>Region 6</option>
                                                    <option value={1}>Region 7</option>
                                                    <option value={2}>Region 8</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="shippingTitle">
                                            <p>Zip/Postal Code</p>
                                        </div>
                                        <div className="selectOption">
                                            <input type="text" />
                                        </div>
                                        <button type="submit">Get Quotes</button>
                                    </form>
                                </div>
                            </div>
                            {/* End Stmate shoping and cart */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End page content */}
        </>
    )
}
