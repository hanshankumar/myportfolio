import React from 'react'
import {Element} from 'react-scroll'
import Experience from '../Experiencebox/Experience'
import "./Experiencecontainer.css"

const Experiencecontainer = () => {
  return (
   <Element className='experiencecontainer' id='Experience'>
     <h1>Experience</h1>
     <div className='experiencecontainer__info'>
        <Experience number="+10" title="Clients"/>
        <Experience number="+10" title="Clients" style={{backgroundColor:"#f64c08"}}/>
        <Experience number="+10" title="Clients"/>
        <Experience number="+10" title="Clients"/>
     </div>

   </Element>
  )
}

export default Experiencecontainer