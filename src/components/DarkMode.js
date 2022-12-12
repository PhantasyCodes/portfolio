import React from 'react'
import sun from '../assets/images/sun.png'
import moon from '../assets/images/moon.png'

import './DarkMode.css'

const DarkMode = () => {
  return (
    <div className='darkmode'>
        <img className='moon' src={moon} alt="Moon" />
        <img className='sun' src={sun} alt="Sun" />
    </div>
  )
}

export default DarkMode