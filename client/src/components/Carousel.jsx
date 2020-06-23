import React from 'react';
import SliderThumb from './SliderThumb.jsx'
import Flickity from 'react-flickity-component';
import styled from 'styled-components'

const flickityOptions = {
  initialIndex: 0,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: true,
  adaptiveHeight: false,
  wrapAround: false,
  lazyLoad: true,
  cellAlign: 'left',


  // groupCells: 1
  // contain: true
}

var Carousel = (props) => {
  console.log(props)

  return (
    <div width='40%'>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false

      >
        <img src={props.product.products[0].image}/>
        <img src="https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_autumn1.webp"/>
      </Flickity>
      <SliderThumb image={props.product.products[0].image} />
    </div>
  )

  // return(
  //   <div>
  //     <img id="slider" border='1px solid black' height='45%' width='45%' src={props.product.products[0].image}></img>
  //     <SliderThumb image={props.product.products[0].image} />
  //   </div>
  // )
}

export default Carousel;