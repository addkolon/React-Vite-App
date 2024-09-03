import React from 'react'
import './Cards.css'

import OrcaImage from './../../assets/images/orca.png'

export default function Cards() {
  return (
    <>
      <div className="card no-br">
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
          <button className='btn btn-primary'>Skapa konto</button>
          <button className='btn btn-text'>Logga in</button>
          {/* <button className='btn btn-primary-outlined no-br'>Logga in</button> */}
        </div>
      </div>
    </>
  )
}
