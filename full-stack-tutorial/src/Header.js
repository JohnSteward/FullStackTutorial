import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img src='/assets/logo.png' className='HeaderLogo' alt=''/>

      <div className='header-search'>
        <input className='header-input' type='text'></input>
        <SearchIcon className='header-searchicon'/>
        {/* Logo */}
      </div>

      <div className='header-nav'>
        <div className='header-option'>
          <span className='header-optionLineOne'> Hello Guest</span>
          <span className='header-optionLineTwo'>Sign In</span>
        </div>

        <div className='header-option'>
          <span className='header-optionLineOne'> Returns</span>
          <span className='header-optionLineTwo'>& Orders</span>
        </div>

        <div className='header-option'>
          <span className='header-optionLineOne'> Your</span>
          <span className='header-optionLineTwo'>Prime</span>
        </div>

        <div className='header-basket-option'>
          <ShoppingBasketIcon className='basket'/>
          <span className='header-optionLineTwo header-basketcount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
