import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dani.png' 
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className=".container.header__container">

      <div className="header__text"><h5>Hello I'm</h5>
        <h1> Danielle Smikle</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      </div>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img className= "header__pic" src={ME} alt="me"/>
        </div>

          <a href = "#contact" className="scroll__down">Scroll Down</a>
        </div>
    </header>
  )
}

export default Header