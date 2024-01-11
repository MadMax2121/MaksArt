import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Footer() {

    const [email, setEmail] = useState("");

    const handleInputChange = (event) => {
        setEmail(event.target.value);

    } 

    const clearInput = () => {
        setEmail('');
    }

    return (
        <main style={{ paddingTop: "20px", marginTop: "20px", borderTop: "4px solid #8b0000"}}>
            <div className='prefooter'>
                <div className='col'>
                    <h2>Sitemap</h2>
                    <div className='footer_menu' style={{ margin: "0px" }} onClick={ () => {window.scrollTo(0, 0)}}>
                        <Link className="prefooter_link" to="/" >Home</Link>
                        <Link className="prefooter_link" to="/about" >About Us</Link>
                        <Link className="prefooter_link" to="/collection">Our Collection</Link>
                        <Link className="prefooter_link" to="/contact">Contact Us</Link>
                    </div>
                    <p style={{ width: "20cm", marginTop: "40px", marginBottom: "20px", fontSize: "20px", textAlign: "center" }}>Subscribe to get latest news, updates and information.</p>
                    <div className='email_input'>
                        <input  className = "email_inp" type="text" placeholder='Enter Email Here...' value = {email} onChange={handleInputChange}/>
                        <img src="/Footer/arrow_right.svg" alt="" onClick = {clearInput}/>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='socials'>
                    <img src="/icons/instagram.png" style = {{cursor:"pointer"}} alt="" onClick = {() => {window.open("https://www.instagram.com/maksartgallery/", '_blank', 'noopener,noreferrer')}}/>
                    <img src="/icons/facebook.png" style = {{cursor:"pointer"}} alt="" onClick = {() => {window.open("https://www.facebook.com/alenamo21/", '_blank', 'noopener,noreferrer')}}/>
                </div>
                <p>
                    ©Copyright. Designed and Developed by Maxim Moskalenko
                </p>
            </div>
        </main>
    )
}

export default Footer
