import React from "react"
import "./Footer.css"
import Google from "../../assets/google.png"
import Instagram from "../../assets/instagram.png"
import Youtube from "../../assets/youtube.png"
import Logo from "../../assets/hero-img-removebg-preview.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <a href="https://vprofitness.com" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="google" className="footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/vpro.fitness/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="insta" className="footer-social-icon" />
          </a>
          <a href="https://www.youtube.com/@VproFitnessClub" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="youtube" className="footer-social-icon" />
          </a>
        </div>
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-contact-details">
          <a href="tel:8975040910" className="footer-contact-link">
            <FaPhoneAlt style={{ marginRight: "8px" }} /> +918975040910
          </a>
          <a href="mailto:vprofitnessclub@gmail.com" className="footer-contact-link">
            <FaEnvelope style={{ marginRight: "8px" }} /> vprofitnessclub@gmail.com
          </a>
        </div>
      </div>
      <div className="blur blur-footer1"></div>
      <div className="blur blur-footer2"></div>
      <div className="footer-text">
        <span>© 2025 All Copyrights Reserved – Vpro Fitness & Nutrition!</span>
      </div>
    </div>
  )
}

export default Footer
