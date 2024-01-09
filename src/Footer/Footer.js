import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <main style={{ paddingTop: "40px" }}>
            <div className='prefooter'>
                <div className='col'> 
                    <h2>Sitemap</h2>
                    <div className='footer_menu'>
                        <Link className = "prefooter_link" to ="/">Home</Link>
                        <Link className = "prefooter_link" to = "/about">About Us</Link>
                        <Link className = "prefooter_link" to = "/collection">Our Collection</Link>
                        <Link className = "prefooter_link" to = "/contact">Contact Us</Link>
                    </div>
                    <p style={{width:"20cm", marginTop: "40px",marginBottom: "20px", fontSize:"20px", textAlign:"center"}}>Subscribe to get latest news, updates and information.</p>
                    <input type="text" name placeholder='Enter Email Here...'/>
                </div>
            </div>

            <div className='footer'>
                <div className='socials'>
                   <img src="/icons/facebook.png" alt="" />
                   <img src="/icons/instagram.png" alt="" /> 
                   <img src="/icons/linked-in.png" alt="" /> 
                   <img src="/icons/pinterest.png" alt="" /> 
                   <img src="/icons/behance.png" alt="" /> 
                </div>
                <p>
                ©Copyright. Designed and Developed by Maxim Moskalenko
                </p>
            </div>
        </main>
    )
}

export default Footer
