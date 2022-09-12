import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

import {ContextProvider} from "./Context"
import App from "./App"
import "./App.css"

ReactDOM.render(
    <ContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ContextProvider>,
    document.getElementById("root"))