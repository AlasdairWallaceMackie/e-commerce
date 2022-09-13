import React from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

export default function Image(props){
    const {toggleFavorite, addToCart, cartItems} = React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)
    const isInCart = (cartItems.find(item => item.id === props.img.id)) ? true : false

    const heartIconClass = props.img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
    const heartIcon = (hovered || props.img.isFavorite) && 
        <i
            className={`${heartIconClass} favorite drop-shadow`}
            onClick={() => toggleFavorite(props.img.id)}    
        />

    const cartIconClass = isInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line" 
    const cartIcon = (hovered || isInCart) &&
        <i
            className={`${cartIconClass} cart drop-shadow`}
            onClick={() => addToCart(props.img)}
        />


    return (
        <div
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon}
            {cartIcon}
            <img className="image-grid rounded-3 shadow-lg" src={props.img.url} alt=""/>
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.exact({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    }).isRequired,
}