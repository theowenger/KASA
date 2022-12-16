import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/404.css'
import Header from "../components/header";
import Body404 from "../components/body404";


function PageNotFound() {
    return (
        <div className="home">
        <Header />
        <Body404 />
        </div>
    )
}

export default PageNotFound