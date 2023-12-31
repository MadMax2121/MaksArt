import React from 'react'
import './Header.css'

function Header() {
  return (
    <main className="main">

      <h1 className='logo'>
        Sine<span className='span'>Mkt</span>.
      </h1>

      <div className='menu'>
       <button className='button'>Home</button>
       <button className='button' >Services</button>
       <button className='button'>Contacts</button>
       <button className='button'>Info</button>
       <button className='button'>Extra</button>
      </div>
      <div className='icons'>
       <button className="nav-icon">
              <img className="search" src="/icons/search.png" alt=""/>
          </button>
            <button className="nav-icon">
                <img className="settings" src="/icons/settings.png" alt=""/>
            </button>
            <button className="nav-icon">
                <img className="cart" src="/icons/cart.png" alt=""/>
            </button>
      </div>
    </main>
  )
}

export default Header
