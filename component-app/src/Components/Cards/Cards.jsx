import React from 'react'
import './Cards.css'

import OrcaImage from './../../assets/images/orca.png'

export default function Cards() {
  return (
    <>
      <div className="card">
        <div className='card-image'>
          <img src={OrcaImage} alt="A picture of a pack of Killer Whales" />
        </div>
        <div className="card-content">
          <h3 className='card-title'>Se vilda Späckhuggare</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt pariatur quae nisi, repellat quia similique dolorem rem debitis.
          </p>
        </div>
        <div className="card-buttons">
          <button className='primary-button'>Skapa konto</button>
        </div>
      </div>
    </>
  )
}
