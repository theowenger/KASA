import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/about.css'
import Header from "../components/header";
import BannerPropos from '../assets/img/prop-banner.png'
import ProposCard from "../components/proposCard";
import Footer from "../components/footer";

function About() {
    return (
        <div className="home">
        <Header />
        <img className="propos-banner" src={BannerPropos} alt="propos banniere"></img>
        <ProposCard />
        <Footer />
        </div>
    )
}

export default About