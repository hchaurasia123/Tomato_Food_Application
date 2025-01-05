import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'



const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">

        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime cumque eaque aperiam nesciunt fugit odit suscipit consequuntur quas repellat quasi architecto eius illum corrupti in minus porro provident, inventore sequi?</p>
        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>

        </div>
        <div className="footer-content-center">
                 <h2>Company</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>9044872042</li>
            <li>harshitchaurasia1302@gmail.com</li>
        </ul>

        </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved. </p>
     
           
    </div>
  )
}

export default Footer