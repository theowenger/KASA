import React from "react";
import  '../assets/css/header.css'

import Banner from "../components/banner"
import Gallery from "../components/gallery"


function Index() {
    return (
        <div className="home">
        <Banner />
        <Gallery />
        </div>
    )
}

export default Index