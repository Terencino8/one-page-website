import React from 'react'
import "./Feature.css"
import { BsHexagon } from 'react-icons/bs';

// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';


const feature = ({icon, heading, text}) => {

 

    
  return (
    <div className='feature'>
        <div className="feature-icon" data-aos="fade-down">
            <BsHexagon color='orangered' size={55}/>
            <div className="inner-icon">
            {icon }
            </div>
        </div>
        <div className="feature-text" data-aos="fade-left">
            <h3>{heading}</h3>
            <p className="u-text-small">
                {text}
            </p>
        </div>
    </div>
  )
}

export default feature