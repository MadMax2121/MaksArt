import React from 'react'
import './Header.css'



function Header() {
 return (
   <main className="main">


     <img className = "logo" src="/logo/logo.png" alt="" />


      <div className = "menu">
       <input  className = "search_bar" type="text" name placeholder='Search for a product...'></input>
      </div>
  
     <div className='icons'>
       <button className="nav-icon">
         <img className="search" src="/icons/search.png" alt="" />
       </button>
       <button className="nav-icon">
         <img className="settings" src="/icons/settings.png" alt="" />
       </button>
       <button className="nav-icon">
         <img className="cart" src="/icons/cart.png" alt="" />
       </button>
     </div>
   </main>
 )
}


export default Header