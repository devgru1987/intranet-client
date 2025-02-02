import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

/***test images ****/  

import testimg1 from '../assets/testimgs/shot1.png'
import testimg2 from '../assets/testimgs/shot2.png'

function CustomCarousel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} dynamicHeight={false} showThumbs={false}>
      <div>
       <img src={testimg1} className="carousel-img"/>
       {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src={testimg2} className="carousel-img"/>
        {/* <p className="legend">Legend 2</p> */}
      </div>
      {/* <div>
         <img src={testimg3} className="carousel-img"/>
         <p className="legend">Legend 3</p>
      </div> */}
    </Carousel>
  );
};

export default CustomCarousel
