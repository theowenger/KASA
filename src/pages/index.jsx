import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/header.css'

import Banner from "../components/banner"
import Gallery from "../components/gallery"


function Index(props) {
    return (
        <div className="home">
        <Banner />
        <Gallery />
        </div>
    )
}

export default Index