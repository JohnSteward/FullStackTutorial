import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img src='./images/logo.webp'  className='HeaderLogo'/>

      <div className='header-search'>
        <input className='header-input' type='text'></input>
        {/* Logo */}
      </div>

      <div className='header-nav'>

      </div>
    </div>
  )
}

export default Header
