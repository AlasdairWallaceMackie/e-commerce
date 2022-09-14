import React from "react"

import {Context} from "../Context"
import useHover from "../hooks/useHover"

export default function CartItem(props){
    const {removeFromCart} = React.useContext(Context)
    const [showRemoveConfirm, setShowRemoveConfirm] = React.useState(false)
    const [trashIconHovered, ref] = useHover()

    const removeConfirmation = (
        <div className="position-absolute bg-light text-center p-3 rounded shadow border border-2">
            <h4>Remove this item from cart?</h4>
            <button 
                className="btn btn-sm btn-danger"
                onClick={() => {
                    removeFromCart(props.img.id)
                    setShowRemoveConfirm(false)
                }}
            >
                Remove
            </button>
            
            <span className="mx-3">|</span>

            <button 
                className="btn btn-sm btn-secondary" 
                onClick={() => setShowRemoveConfirm(false)}
            >
                Cancel
            </button>
        </div>
    )
    
    return (
        <>
            <div className="cart-item">
                <i 
                    className={trashIconHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
                    onClick={() => setShowRemoveConfirm(true)}
                    ref={ref}
                />
                <img 
                    className={`rounded shadow ${showRemoveConfirm && "blur"}`}
                    src={props.img.url} 
                    alt="" 
                />
                <strong className="fs-3">${props.price}</strong>
                
                {showRemoveConfirm && removeConfirmation}
            </div>
            
        </>
    )
}

CartItem.defaultProps = {
    price: 5.99
}