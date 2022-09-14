import React from "react"

export default function useHover(){
    const [hovered, setHovered] = React.useState(false)
    const ref = React.useRef(null)

    function enter(){
        setHovered(true)
    }

    function leave(){
        setHovered(false)
    }

    React.useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
    }, [])

    return [hovered, ref]
}