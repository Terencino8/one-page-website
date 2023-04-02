import React from 'react'
import "./Download.css"
import {GrAndroid} from "react-icons/gr"
import {FaApple, FaWindows} from "react-icons/fa"
import {IconContext} from "react-icons"




const Download = () => {
  return (
    <section id='download'>
        <div className="container download">
            <h2>Terry.C MESSANGER DOWNLOAD</h2>
            <p className="u-text-small u-text-light">
                Our apps are available for download on all stores.
            </p>


            
          <IconContext.Provider value={{size:"25"}}>
            <div className="download-icons">
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