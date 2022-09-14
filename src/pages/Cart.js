import React from "react"
import {Context} from "../Context"

import CartItem from "../components/CartItem"

export default function Cart(){
    const {cartItems} = React.useContext(Context)

    const cartElements = cartItems.map(item => (
        <>
            <CartItem
                key={item.id}
                className="cart-img"
                img={item}
            />
            <hr className="hr"/>
        </>
    ))

    const checkOutButton = <div className="text-center"><button className="btn btn-lg btn-success shadow">Place Order</button></div>

    const totalCost = (5.99 * cartItems.length).toLocaleString("en-us", {style: "currency", currency: "USD"})

    return (
        <main className="cart-page container-fluid col-lg-8 p-5">
            <h1 className="mb-4">Your Cart</h1>
            {checkOutButton}
            {cartElements.length ? cartElements : <i>Your cart is empty</i>}
            <div className="total-cost">
                <h3 className="fw-bold">Total: {totalCost}</h3>
            </div>
            {cartItems.length > 3 && checkOutButton}
        </main>
    )
}