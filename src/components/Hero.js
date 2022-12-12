import React from 'react'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// import nextIcon from '../assets/images/right.png'
// import prevIcon from '../assets/images/left.png'

import './Hero.css'

const options = {
    items: 1,
    nav: false,
    loop: true,
    dots: true,
    autoplay: true,
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className="heading">
            <h1>WEB DEVELOPER - GRAPHIC DESIGNER - UX/UI DESIGNER</h1>
        </div>
        <div className="text">
            <h2>i make <span className='green'>beautiful</span> and <span className='red'>interactive</span> interfaces for great businesses. Because every <span className='blue'>great business</span> needs <span className='orange'>great design</span></h2>
        </div>
        <OwlCarousel
        className='owl-theme'
        {...options}
        >
            <div className='item'>
                <div className="skills">
                    <div className="skill-level">
                        <h1>VERY PROFICIENT</h1>
                        <div className="bar"></div>
                    </div>
                    <div className="experience">
                        <h1>1+ YRS EXPERIENCE</h1>
                        <div className="bar"></div>
                    </div>
                </div>
                <h2>React</h2>
            </div>
            <div className="item">
                <div className="skills">
                    <div className="skill-level">
                        <h1>VERY PROFICIENT</h1>
                        <div className="bar"></div>
                    </div>
                    <div className="experience">
                        <h1>1+ YRS EXPERIENCE</h1>
                        <div className="bar"></div>
                    </div>
                </div>
                <h2>Adobe Tools</h2>
            </div>
            <div className="item">
                <div className="skills">
                    <div className="skill-level">
                        <h1>VERY PROFICIENT</h1>
                        <div className="bar"></div>
                    </div>
                    <div className="experience">
                        <h1>2+ YRS EXPERIENCE</h1>
                        <div className="special"></div>
                    </div>
                </div>
                <h2>UX/UI design</h2>
            </div>
        </OwlCarousel>
    </div>
  )
}

export default Hero