import banner from '../assets/img/banner.png'
import "../assets/css/banner.css"
import React from 'react'

function Banner(props) {
    console.log(props)
    return (
        <div className='banner-container'>
        <h2 className='slogan-banner'>Chez vous, partout et ailleurs</h2>
        <img className='banner' src={banner} alt="banner"></img>
        </div>
    )
}

export default Banner