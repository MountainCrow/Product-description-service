import React from 'react';
import SliderThumb from './SliderThumb.jsx'
import Slider from 'react-slick';

var Carousel = (props) => {

  return(
    <div>
      <img id="slider" border='1px solid black' height='45%' width='45%' src={props.product.products[0].image}></img>
      <SliderThumb image={props.product.products[0].image} />
    </div>
  )
}

export default Carousel;