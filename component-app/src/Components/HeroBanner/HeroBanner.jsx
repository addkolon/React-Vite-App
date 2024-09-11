import React from 'react'
import './HeroBanner.css'

export default function HeroBanner({ data }) {
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 5);  // Multiplies by 5 to get a range from 0 to 4
  }

  const choosenMovie = getRandomNumber()
  const bgImage = data[choosenMovie].posterUrl;

  return (
    <>
    <div className='hero-banner' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content">
      <h4>Hetast just nu</h4>
      <h2>{data[choosenMovie].title}</h2>
      <p>{data[choosenMovie].description}</p>
      <button className='btn btn-primary btn-pill'>Se förestälningarna</button>
      </div>

    </div>
    
    </>
  )
}
