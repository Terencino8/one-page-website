import React, {useEffect} from 'react'
import "./Features.css"
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import phoneFeatures from "../../assets/phone-features.png"
import Feature from './Feature.js'
import { featureList } from "./data"

// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {

    // this is to use the animation effect
    useEffect (() =>{
      AOS.init({
        duration: 1500,
      });
    }, [])


  return (
    <section id='features'>
      
      <div className="container features">
        <div className="u-title"  data-aos="fade-down">
          <BsFillBookmarkStarFill color='orangered' size={30}/>
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            TERRy.C is a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores aspernatur non. Laudantium culpa architecto quisquam rem porro molestias
            </p>
        </div>

        <div className="features-content">
            <div className="features-left" data-aos="fade-right">
                <img src={phoneFeatures} alt="Phone"  />
            </div>

            <div className="features-right">
            {
                featureList.map((feature) =>(
                  <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text}  data-aos="fade-left"/>
                ))
            }
            </div>
        </div>

      </div>

    </section>
  )
}

export default Features