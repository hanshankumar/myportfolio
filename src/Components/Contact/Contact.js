import React from 'react'
import {Element} from "react-scroll"
import Icon from '@mui/material/Icon';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Contact.css";


const Contact = () => {
  return (
    <Element className='contact' id="Contact">
        <h1 className='title1'>
            Contact
        </h1>
        <div className='contact__container'>

        <p>
            Email:<span>hanshankumar.b2022ece@sece.ac.in</span>
        </p>

        <p>
            Github:<span>@hanshankumar</span>
        </p>
        <div className='contact__icons'>

            <a href="www.google.com">
                <Icon className='hello'>
                    <FacebookIcon/>

                </Icon>
            </a>

            <a href="www.google.com">
                <Icon className='hello'>
                    <InstagramIcon/>
                </Icon>
            </a>

            <a href="https://www.linkedin.com/in/hanshan-kumar-a648bb259/">
                <Icon className='hello'>
                    <LinkedInIcon/>
                </Icon>
            </a>


        </div>
            
        </div>
    </Element>
  )
}

export default Contact