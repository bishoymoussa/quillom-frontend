import React from 'react'
import about from "../images/about.svg";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now"
                btnname_2="Know More"
            />
        </>
    )
}

export default About
