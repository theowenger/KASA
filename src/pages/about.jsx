import React from "react";
// import {Link} from "react-router-dom"
import  '../assets/css/about.css'

import BannerPropos from '../assets/img/prop-banner.png'
import ProposCard from "../components/proposCard";

function About() {
    return (
        <div className="home">
        <img className="propos-banner" src={BannerPropos} alt="propos banniere"></img>
        <ProposCard />
        </div>
    )
}

export default About