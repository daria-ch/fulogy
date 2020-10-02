import '../styles/globals.css';
import '../styles/app.css';
import React from "react";
import Home from "./home";

function MyApp({Component, pageProps}) {
    return <Home>
        <Component
            {...pageProps} />
    </Home>
}

export default MyApp
