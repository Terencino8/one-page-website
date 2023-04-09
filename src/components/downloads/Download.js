import React, {useEffect} from 'react'
import "./Download.css"
import {GrAndroid} from "react-icons/gr"
import {FaApple, FaWindows} from "react-icons/fa"
import {IconContext} from "react-icons"


// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {

    // this is to use the animation effect
    useEffect (() =>{
      AOS.init({
        duration: 1500,
      });
    }, [])


  return (
    <section id='download'>
        <div className="container download">
            <h2 data-aos="fade-right">Terry.C MESSANGER DOWNLOAD</h2>
            <p className="u-text-small u-text-light" data-aos="fade-left">
                Our apps are available for download on all stores.
            </p>


            
          <IconContext.Provider value={{size:"25"}}>
            <div className="download-icons"  data-aos="fade-up">
                  <div className="download-icon">
                    <FaApple/> <p>ios</p>
                  </div>

                  <div className="download-icon">
                    <GrAndroid/> <p>Android</p>
                  </div>

                  <div className="download-icon">
                    <FaWindows/> <p>Windows</p>
                    
                </div>
              </div>
          </IconContext.Provider>
        </div>       
    </section>
  )
}

export default Download