import React from 'react'
import "./Features.css"
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import phoneFeatures from "../../assets/phone-features.png"
import Feature from './Feature.js'
import { featureList } from "./data"

const Features = () => {
  return (
    <section id='features'>
      
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color='orangered' size={30}/>
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            TERRy.C is a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores aspernatur non. Laudantium culpa architecto quisquam rem porro molestias
            </p>
        </div>

        <div className="features-content">
            <div className="features-left">
                <img src={phoneFeatures} alt="Phone" />
            </div>

            <div className="features-right">
            {
                featureList.map((feature) =>(
                  <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}/>
                ))
            }
            </div>
        </div>

      </div>

    </section>
  )
}

export default Features