import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (<div>
    <div className='footer'>
        <div className='about'>
            <h1 className='abouttext'>ABOUT US</h1>
            <p className='aboutparam'>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit. Neque facere laudantium<br/>magnam voluptatum autem. Amet aliquid<br/>nesciunt veritatis aliquam.</p>
        </div>

        <div className='features'>
            <h1 className='abouttext'>FEATURES</h1>
            <p className='aboutparam'>About Us</p>
            <p className='aboutparam'>Testimonials</p>
            <p className='aboutparam'>Terms of</p>
            <p className='aboutparam'>Service</p>
            <p className='aboutparam'>Privacy</p>
            <p className='aboutparam'>Contact Us</p>
        </div>
        
        <div className='paraggraph'>
        <h1 className='abouttext'>SOME PARAGRAPH</h1>
            <p className='aboutparam'>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit. Neque facere laudantium<br/>magnam voluptatum autem. Amet aliquid<br/>nesciunt veritatis aliquam.</p>

            <h1 className='abouttext'>SUBSCRIBE TO NEWSLETTER</h1>
            <div className='inpbtn'>
            <input className='emailinp' placeholder='Enter Email'/>
            <button className='subbtn'>Subscribe</button>
            </div>

            <h1 className='abouttext'>FOLLOW US</h1>
            <div className='icons'>
            <FaFacebookF/>
            <FaTwitter />
            <BiLogoInstagramAlt />
            <FaLinkedinIn />
            </div>

        </div>

    </div>
    <hr></hr>
    </div>
  )
}

export default Footer