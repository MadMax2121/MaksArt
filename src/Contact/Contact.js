import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <main className = "contact_main">
      <div className = "contact_header">
      <h1>Contact Us</h1>
      <p>Input your contact information and we will try to get back to you right away!</p>
      </div>
      <div className="contact_name">
        <input placeholder='Names'></input>
        <input placeholder='Last Name'></input>
      </div>
      <div className="contact_name">
        <input placeholder='Email' />
      </div>
      <div className='contact_subject'>
        <input type="text" placeholder='Subject' />

      </div>

    </main>
  )
}

export default Contact
