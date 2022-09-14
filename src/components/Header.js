import React from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"

export default function Header(){
    const {cartItems} = React.useContext(Context)

    const cartIcon = cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <nav className="d-flex justify-content-between p-3 bg-success text-light shadow">
            <Link to="/" className="nav-link"><h1>E-Commerce Site</h1></Link>
            <Link to="/cart" className="nav-link">
                <i className={`${cartIcon} ri-2x`}></i>
                <span className="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-warning text-dark">
                    {cartItems.length}
                </span>
            </Link>
        </nav>
    )
}