import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import crostage from '../assets/images/crostage.png'
import arrowLeft from '../assets/images/left.png'
import arrowRight from '../assets/images/right.png'

import './Portfolio.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='next-arrow' onClick={onClick}>
            <img src={arrowRight} alt="right" />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='prev-arrow' onClick={onClick}>
            <img src={arrowLeft} alt="left" />
        </div>
    );
  }

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <Slider {...settings}>
            <div className='card'>
                <div className="card-left">
                    <div className="card-details">
                        <h1>SCHooL PROJECT</h1>
                        <p><span>Date finished:</span> July 2022</p>
                        <p><span>Type:</span> Eccomerce</p>
                        <p><span>Technologies:</span> HTML, CSS, Javascript, PHP</p>
                    </div>
                    <a href="https://crostage.co.ke">www.crostage.co.ke</a>
                </div>
                <div className="card-right">
                    <img src={crostage} alt="crostage" />
                </div>
            </div>
            <div className='card'>
                <div className="card-left">

                </div>
                <div className="card-right">
                    
                </div>
            </div>
        </Slider>
    </div>
  )
}

export default Portfolio