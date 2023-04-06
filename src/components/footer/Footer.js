import React from 'react'
import "./Footer.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container footer">

        <div className="footer-box">
            <h4>Useful Links</h4>
            <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            <a href="#">&bull; Messanger</a>
            </div>

        </div>
        <div className="footer-box">
              <h4>Support</h4>
              <div className="footer-links">
                <a href="#">&bull; Support</a>
                <a href="#">&bull; About</a>
                <a href="#">&bull; Learn</a>
                <a href="#">&bull; Hosting</a>
                <a href="#">&bull; Messanger</a>
              </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          .footer-contact
        </div>
        <div className="footer-box"></div>
        
      </div>
        
    </div>
  )
}

export default Footer