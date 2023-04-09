import React, {useEffect } from 'react'
import "./Header.css"
import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button'
import "./../UI/button/Button"
import {BsMouse} from "react-icons/bs";

// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  // this is to use the animation effect
  useEffect (() =>{
    AOS.init({
      duration: 1500,
    });
  }, [])

  return (
    <section id='header'>
        <div className="container header">
          <div className="header-left" data-aos="fade-right" >
            <h1>
              <span>THE WORLD'S LEADING</span>
              <span>CROSS-PLATFORM SECURE</span>
              <span>MESSAGING SYSTEM</span>
            </h1>
            <p className='u-text-small u-text-light'>TERRy.C is a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores aspernatur non. Laudantium culpa architecto quisquam rem porro molestias, recusandae eum commodi tempora itaque explicabo, eaque ipsa, temporibus cupiditate aperiam!</p>
          
            <div className="header-cta">
                <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
                <Button text={"How it works"} btnClass={"btn-orange"} href={"#Faq"}/>
            </div>
          
          </div>



          
          <div className="header-right" data-aos="fade-left">
              <img src={phoneHeader} alt="Phone" />
          </div>



        </div>

        <div className="floating-icon">
          <a href="#features">
              <BsMouse color='#fff' size={25} className="mouse"/>
          </a>
        </div>
    </section>
  )
}

export default Header