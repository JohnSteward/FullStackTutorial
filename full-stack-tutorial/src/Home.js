import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img src='/assets/Background.png' alt='' className='background'/>

        <div className='home-row'>
            <Product title="The lean startup" price={29.99} image='/assets/LeanStartup.jpg' rating={5}/>
            <Product title="Kenwood kMix Stand mixer" price={149.99} image='/assets/Kenwood.jpg' rating={3}/>
            {/* Product */}
        </div>
        <div className='home-row'>
            <Product />
            <Product />
            <Product />
        </div>
        <div className='home-row'>
            <Product />
        </div>
      </div>

    </div>
  )
}

export default Home
