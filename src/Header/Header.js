import React from 'react'
import './Header.css'



function Header() {
  return (
    <main className="main">


      <img className="logo" src="/logo/logo.png" alt="" />

      <div className="header">

        <div className='menu'>
          <button>Home</button>
          <button>About Us</button>
          <button>Our Collection</button>
          <button>Contact Us</button>
        </div>
        
        <input className="search_bar" type="text" name placeholder='Search for a product...'></input>
      </div>

      <div className='icons'>
      <button className="nav-icon">
          <img className="profile" src="/header/profile.svg" alt="" />
        </button>
        <button className="nav-icon">
        <img className="cart" src="/header/cart.svg" alt="" />
      
        </button>
       
      
      </div>
    </main>
  )
}


export default Header