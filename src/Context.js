import React from "react"

const Context = React.createContext()

function ContextProvider(props){
    const [allPhotos, setAllPhotos] = React.useState([])

    function toggleFavorite(id){
        setAllPhotos(prevState => prevState.map(photo => (
            {
                ...photo,
                isFavorite: photo.id === id ? !photo.isFavorite : photo.isFavorite
            }
        )))
    }

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setAllPhotos(data))
        }, [])

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}