import React from 'react'
import './Details.css'

import linkedin from '../assets/images/linkedin.png'
import github from '../assets/images/github.png'

const Details = () => {
  return (
    <div className='details'>
      <div className="slider">
        <h1>web developer</h1>
      </div>
      <div className="details-text">
        <h2>DAVID KING</h2>
        <h1>2003</h1>
        <p>I'm a student at Strathmore University, currently pursuing a degree in informatics and computer science. Very passionate about programming and creating memorable user experiences</p>
        <div className="images">
          <a href="https://www.linkedin.com/in/davidkingdeveloper/"><img src={linkedin} alt="linkedin" /></a>
          <a href="https://github.com/PhantasyCodes"><img src={github} alt="github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Details