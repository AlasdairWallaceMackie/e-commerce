import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <nav className="d-flex justify-content-between p-3 bg-success text-light shadow">
            <Link to="/" className="nav-link"><h1>E-Commerce Site</h1></Link>
            <Link to="/cart" className="nav-link"><i className="ri-shopping-cart-line ri-2x"></i></Link>
        </nav>
    )
}