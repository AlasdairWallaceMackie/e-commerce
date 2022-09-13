import React from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"

export default function Image(props){
    const {toggleFavorite} = React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)

    const heartIconClass = props.img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
    const heartIcon = (hovered || props.img.isFavorite) && 
        <i
            className={`${heartIconClass} favorite drop-shadow`}
            onClick={() => toggleFavorite(props.img.id)}    
        />
    const cartIcon = hovered &&
        <i className="ri-add-circle-line cart drop-shadow" />


    return (
        <div
            className={`${props.className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon}
            {cartIcon}
            <img className="image-grid rounded-3 shadow-lg" src={props.img.url} />
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