import React from 'react'
import "./Header.css"
import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button'
import "./../UI/button/Button"
import {BsMouse} from "react-icons/bs";

const Header = () => {
  return (
    <section id='header'>
        <div className="container header">
          <div className="header-left">
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



          
          <div className="header-right">
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