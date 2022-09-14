import React from "react"
import {Link} from "react-router-dom"

export default function Success(props){
    return (
        <main>
            <div className="text-center m-5">
                <h1 className="mb-4">Order Placed!</h1>
                <Link to="/"><button className="btn btn-lg btn-secondary shadow">Continue Shopping</button></Link>
            </div>
        </main>
    )
}