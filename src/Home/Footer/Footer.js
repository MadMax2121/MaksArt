import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <main style={{ paddingTop: "40px" }}>
            <div className='surface'>
            <div className='clients'>
                <img src="/clients/c5.png" alt="" />
                <img src="/clients/c1.png" alt="" />
                <img src="/clients/c2.png" alt="" />
                <img src="/clients/c3.png" alt="" />
                <img src="/clients/c4.png" alt="" />
            </div>
            </div>

            <div className='prefooter'>
                <div className='row'>
                    <h2>Information</h2>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>News</p>
                    <p>Store</p>
                </div>
                <div className='row'>
                    <h2>Collections</h2>
                    <p>Wooden Chair</p>
                    <p>Royal Cloth Sofa</p>
                    <p>Accent Chair</p>
                    <p>Bed</p>
                    <p>Hanging Lamp</p>
                </div>
                <div className='row'>
                    <h2>My Accounts</h2>
                    <p>My Account</p>
                    <p>Whishlist</p>
                    <p>Community</p>
                    <p>Order History</p>
                    <p>My Cart</p>
                </div>
                <div className='row'>
                    <h2>Newsletter</h2>
                    <p style={{width:"5.1cm", marginBottom: "20px"}}>Subscribe to get latest news, updates and information.</p>
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
