import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"
import Success from "./pages/Success"

export default function App(){
    return (
        <>
            <Header />

            <Routes>
                <Route exact path="/" element={<Photos />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/success" element={<Success />} />
            </Routes>
        </>
    )
}