import React, { useState, useEffect } from 'react'
import "./Question.css"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Question = ({title, answer}) => {

    // this is to use the animation effect
    useEffect (() =>{
      AOS.init({
        duration: 1500,
      });
    }, [])

    
    const [showAnswer, setShowAnswer] = useState(false)

    const handleClick =() => {
      setShowAnswer(!showAnswer);
    };
  return (
    <div className='container question' data-aos="fade-left">
      <div className="question-title">
          <h4>{title}</h4>
          <button className="question-icon" onClick={handleClick}>
            {
              showAnswer ? (<AiOutlineMinus color='red'/> ) : (<AiOutlinePlus color="#1f93ff" />)
            }
          </button>
      </div>
      <div className="question-answer">
          {showAnswer && <p className="u-text-small">{answer}</p>}
          
      </div>
        
    </div>
  )
}

export default Question