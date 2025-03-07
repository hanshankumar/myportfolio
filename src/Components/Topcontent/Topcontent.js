import React from 'react'
import {Link} from 'react-scroll'
import "./Topcontent.css";

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>MR. B.Hanshan Kumar</h1>
            <p>An Engineering Graduate</p>
            <a href="www.google.com"> 
                <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
            <Link to="Projects" smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
            </Link>



        </div>

    </div>
  )
}

export default Topcontent