import React from 'react'
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DANIELLE SMIKLE</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BiLogoFacebook/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>

      <div className=".footer__copyright">
        <small>&copy; Danielle Smikle.</small>
      </div>

    </footer>
   
  )
}

export default Footer