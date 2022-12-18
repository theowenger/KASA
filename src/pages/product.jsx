import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/product.css'
import kasa from '../assets/database/kasa.json'
import Header from "../components/header";
import Footer from "../components/footer";

function Product() {
    
    return (
        <React.Fragment>
        <Header />
    <div>
        
                        {kasa.map((e) => (

                    <li key={e.id} className="card">
                        <img key={e.cover} src={e.cover} alt='loft'></img>
                        <h3 key={e.title}>{e.title}</h3>
                        </li>

                    ))}
    </div>
    <Footer />
    </React.Fragment>
)}

export default Product