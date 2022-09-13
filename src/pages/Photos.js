import React from "react"
import { Context } from "../Context"
import Image from "../components/Image"

export default function Photos(){
    function getSizeClass(id){
        if (id % 5 === 0)
            return "big"
        else if (id % 6 === 0)
            return "wide"
        else
            return ""
    }

    const {allPhotos} = React.useContext(Context)
    const imageElements = allPhotos.map((item, index) => (
        <Image
            key={item.id}
            img={item}
            className={getSizeClass(index)}
        />
    ))

    return (
        <main className="photos">    
            {imageElements}
        </main>
    )
}