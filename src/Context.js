import React from "react"

const Context = React.createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    function toggleFavorite(id){
        setAllPhotos(prevState => prevState.map(photo => (
            {
                ...photo,
                isFavorite: photo.id === id ? !photo.isFavorite : photo.isFavorite,
            }
        )))
    }

    function addToCart(newItem){
        if (cartItems.some(item => item.id === newItem.id))
            removeFromCart(newItem.id)
        else
            setCartItems(prevCart => [...prevCart, newItem])
    }

    function removeFromCart(id){
        setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart, emptyCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}