import React from 'react'
import { Element } from 'react-scroll'
import skilling from "../../assests/skillss.jpeg"
import { LinearProgress } from '@mui/material'
import "./Skillcontainer.css";

const Skillcontainer = () => {
  return (
    
  <Element className='skillcontainer' >
    
     <div className='skillcontainer__image'  >
          <h2 className='title'  id="Skills" >SKILLSET</h2>
       <img src={skilling} alt=""/>
       <div className='skillcontainer__text'>
     

        <div className='skillcontainer__skillset'>
          <h5>Python</h5>
          <div className='skillcontainer__slider skillcontainer__slider1'>
             <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>C/C++</h5>
          <div className='skillcontainer__slider skillcontainer__slider2'>
             <LinearProgress variant="determinate" value={75}/>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>AWS</h5>
          <div className='skillcontainer__slider skillcontainer__slider3'>
             <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>Problem solving</h5>
          <div className='skillcontainer__slider skillcontainer__slider4'>
             <LinearProgress variant="determinate" value={75}/>
          </div>


        <div className='skillcontainer__skillset'>
          <h5>JAVA</h5>
          <div className='skillcontainer__slider skillcontainer__slider5'>
             <LinearProgress variant="determinate" value={75}/>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>Leadership</h5>
          <div className='skillcontainer__slider skillcontainer__slider5'>
             <LinearProgress variant="determinate" value={75}/>
          </div>
        </div>

        <div className='skillcontainer__skillset'>
          <h5>Logical Thinking</h5>
          <div className='skillcontainer__slider skillcontainer__slider6'>
             <LinearProgress variant="determinate" value={75}/>
          </div>
        </div>


        </div>

    </div>

    </div>
    </Element>
  )
}

export default Skillcontainer