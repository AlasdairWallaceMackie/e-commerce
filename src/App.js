import React from "react"
import {Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

export default function App(){
    return (
        <>
            <Header />

            <main className="p-3">
                <Routes>
                    <Route exact path="/" element={<Photos />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </>
    )
}