import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/product.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Apartment from "../components/apartment";

function Product() {
    // const currentLocation = window.location.pathname
    // const currentId = currentLocation.replaceAll('/apartments/', '')
    // console.log(currentId)

    // let product = kasa.find(i => i.id === currentId)
    // console.log('objet:'+ product.title)

    return (
        <div className="home">
            <Header />
            <Apartment />
            <Footer />
        </div>
)}

export default Product