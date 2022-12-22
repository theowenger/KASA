import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/product.css'
import Carroussel from "../components/carroussel";
import TitleApartment from "../components/titleApartment";
import DescriptionApartment from "../components/descriptionApartment";


function Product() {


    return (
        <div className="home">
            <Carroussel />
            <TitleApartment />
            <DescriptionApartment />
            
        </div>
)}

export default Product