import React, { useEffect} from 'react'
import "./Subscribe.css"
import { TiSocialGooglePlus } from "react-icons/ti"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"


// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

    // this is to use the animation effect
    useEffect (() =>{
      AOS.init({
        duration: 1500,
      });
    }, [])



  return (
    <section id='subscribe'>
    <div className="container subscribe">
      <h2 data-aos="fade-left">Subscribe now!</h2>
      <form action="">
          <div className="form-control">
            <input type="text" placeholder='Enter Your Email...'/>
            <button>Subscribe</button>
          </div>
      </form>
      <div className="social-icons">
        <div className="social-icon" data-aos="fade-up">
          <TiSocialGooglePlus/>
        </div>
        <div className="social-icon" data-aos="fade-down">
          <FaFacebookF/>
        </div> 
        <div className="social-icon" data-aos="fade-up">
          <FaTwitter/>
        </div>
        <div className="social-icon" data-aos="fade-down">
          <FaInstagram/>
        </div>
      </div>
    </div>
     
    </section>
  )
}

export default Subscribe