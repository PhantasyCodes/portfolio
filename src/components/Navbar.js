import React from 'react'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
            <h1>davidking</h1>
        </div>
        <div className="links">
            <a className="projects" href="#projects">MY PROJECTS</a>
            <a className="contact" href="#contact">Contact Me</a>
        </div>
    </div>
  )
}

export default Navbar