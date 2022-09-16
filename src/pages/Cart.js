import React from "react"

import {Context} from "../Context"
import CartItem from "../components/CartItem"

export default function Cart(){
    const {cartItems, emptyCart} = React.useContext(Context)
    const [orderPlaced, setOrderPlaced] = React.useState(false)

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

    const spinner = (
        <div className="spinner-border spinner-border-sm text-light" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )

    const checkOutButton = (
        <div className="text-center">
            <button className="btn btn-lg btn-success shadow" onClick={placeOrder}>
                {orderPlaced ? "Ordering..." : "Place Order"}
                {orderPlaced && spinner}
            </button>
        </div>)

    const totalCost = (5.99 * cartItems.length).toLocaleString("en-us", {style: "currency", currency: "USD"})

    function placeOrder(){
        if (cartItems.length){
            setOrderPlaced(true)
        }
        else
            alert("Cart is empty")
    }

    React.useEffect(() => {
        if (orderPlaced){
            const timer = setTimeout(() => {
                setOrderPlaced(false)
                window.location.href = "/success"
                emptyCart()
    
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [orderPlaced])

    return (
        <main className="cart-page container-fluid col-md-8 p-5">
            <h1 className="mb-4">Your Cart</h1>
            {cartItems.length > 0 && checkOutButton}

            <hr className="hr"></hr>

            {cartElements.length ? cartElements : <p className="fst-italic my-4">Your cart is empty</p>}
            <div className="total-cost">
                <h3 className="fw-bold">Total: {totalCost}</h3>
            </div>
            {cartItems.length > 2 && checkOutButton}
        </main>
    )
}