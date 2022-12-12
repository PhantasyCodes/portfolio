import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Slider>
            <div>
                <h1>Nice</h1>
            </div>
            <div>
                <h1>Second</h1>
            </div>
        </Slider>
    </div>
  )
}

export default Portfolio