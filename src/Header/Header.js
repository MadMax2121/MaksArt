import React from 'react'
import './Header.css'
import { NavLink, Link } from 'react-router-dom';



function Header() {
  return (
    <main className="main">


      <Link to="/" className="logo"> <img src="/logo/logo.png" alt="" /> </Link>

      <div className="header">

        <div className='menu'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'menu_link active' : 'menu_link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'menu_link active' : 'menu_link'}>About Us</NavLink>
          <NavLink to="/collection" className={({ isActive }) => isActive ? 'menu_link active' : 'menu_link'}>Our Collection</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'menu_link active' : 'menu_link'}>Contact Us</NavLink>
        </div>

        <input className="search_bar" type="text" name placeholder='Search for a product...'></input>
      </div>

      <div className='icons'>
        <button className="nav-icon">
        <Link to="/login"><img className="profile" src="/header/profile.svg" alt="" /></Link>
        </button>
        <button className="nav-icon">
          <img className="cart" src="/header/cart.svg" alt="" />
        </button>


      </div>
    </main>
  )
}


export default Header