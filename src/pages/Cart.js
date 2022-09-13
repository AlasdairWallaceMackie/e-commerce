import React from "react"
import {Context} from "../Context"

import Image from "../components/Image"

export default function Cart(){
    const {cartItems} = React.useContext(Context)
    const cartElements = cartItems.map(item => (
        <>
            <Image 
                className="cart-img"
                img={item}
            />
            <hr className="hr"/>
        </>
    ))

    return (
        <main className="cart-page">
            <h1>Your Cart</h1>
    
            {cartElements.length ? cartElements : <i>Your cart is empty</i>}
        </main>
    )
}