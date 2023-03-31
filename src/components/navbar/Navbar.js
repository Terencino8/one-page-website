import React, {useState} from 'react';

import "./Navbar.css";
import { SiAnaconda } from "react-icons/si";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from '../UI/button/Button';
import "../UI/button/Button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <nav className='container navbar'>
        <div className="logo">
          <SiAnaconda color='var(--color-white)' size={33}/>
          <p className="logo-text">
            Terry<span>.C</span>
          </p>
        </div>
         
        <menu>
          <ul className="nav-links" id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Subscribe</a></li>
            {/* <li className='nav-btn'><a href="#" className='btn btn-dark'>Get Started</a></li> */}

            <li className='nav-btn'>
              <Button text={"Get Started"} btnClass={"btn-dark"} href={"#Faq"}/>
            </li>
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {
            showMenu ? <RiCloseLine color="#fff" size={30}/> : <AiOutlineBars color="#fff" size={27}/>
          }
        </div>
    </nav>
  )
}

export default Navbar