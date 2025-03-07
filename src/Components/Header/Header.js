import React from 'react'
import {Link} from 'react-scroll'
import "./Header.css";

const Header = () => {
  return (
<div className="header">
        <div className="header__left">
            <h1>Stude<span>nt</span></h1>
        </div>
    <div className="header__right">
      <Link to="about" smooth={true} duration={500}>
      <h4>About Me</h4>
      
      </Link>
      <Link to="Skills" smooth={true} duration={500}>
         <h4>Skills</h4>
      
      </Link>

      <Link to="Projects" smooth={true} duration={500}>
      <h4>Projects</h4>
      </Link>


      <Link to="Experience" smooth={true} duration={500}>
      <h4>Exepreince</h4>
      </Link>

      <Link to="Contact" smooth={true} duration={500}>
      <h4>Contact</h4>
      </Link>
      <h4 className='header__rightbutton'>Join With Me</h4>
    </div>
</div>
  )
}

export default Header