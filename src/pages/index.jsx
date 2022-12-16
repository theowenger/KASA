import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/header.css'
import Header from "../components/header";
import Banner from "../components/banner"
import Gallery from "../components/gallery"
import Footer from "../components/footer";

function Index() {
    return (
        <div className="home">
        <Header />
        <Banner />
        <Gallery />
        <Footer />
        </div>
    )
}

export default Index