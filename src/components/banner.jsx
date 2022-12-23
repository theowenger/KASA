import banner from '../assets/img/banner.png'
import "../assets/css/banner.css"
import React from 'react'

function Banner(props) {
    return (
        <div className='banner-container' 
        style={{ backgroundImage: `url(${banner})` }}>
        <div className='filter-banner'>
        <h2 className='slogan-banner'>Chez vous, partout et ailleurs</h2>
        </div>
        </div>
    )
}

export default Banner