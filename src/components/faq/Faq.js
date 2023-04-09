import React, {useEffect} from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
  import Question from './Question'
  import { questions } from './data.js'

  // this is to import the animation after installing using this link "npm install --save aos@next"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {

    // this is to use the animation effect
    useEffect (() =>{
      AOS.init({
        duration: 1500,
      });
    }, [])


  return (
    <section id='faq'>
        <div className="container faq">
        <div className="u-title" data-aos="fade-down">
          <MdOutlineLibraryBooks color='orangered' size={30}/>
          <h2>FAq</h2>
          <p className="u-text-small u-text-dark">
            TERRy.C is a Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores aspernatur non. Laudantium culpa architecto quisquam rem porro molestias
            </p>
        </div>


        <div className="questions">
        {questions.map((question) => (<Question title={question.title} answer={question.answer}/>
          ))}

        </div>
        </div>
    </section>
  )
}

export default Faq