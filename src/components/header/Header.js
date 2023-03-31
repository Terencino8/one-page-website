import React from 'react'
import "./Header.css"
import phoneHeader from "../../assets/phone-header-bg.png"
import Button from '../UI/button/Button'
import "./../UI/button/Button"

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
            <p>TERRy.C is a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores aspernatur non. Laudantium culpa architecto quisquam rem porro molestias, recusandae eum commodi tempora itaque explicabo, eaque ipsa, temporibus cupiditate aperiam!</p>
          </div>

          <div className="header-cta">
          <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"}/>
            <Button text={"How it works"} btnClass={"btn-orange"} href={"#Faq"}/>
          </div>
          <div className="header-right">

          </div>
        </div>
    </section>
  )
}

export default Header