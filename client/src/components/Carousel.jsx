import React from 'react';
import Flickity from 'react-flickity-component';
import styled from 'styled-components'

const StyledCarousel = styled.div.attrs(props => ({
  className: 'carousel',
}))`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

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
    <StyledCarousel>
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
        <img src={props.product.products[0].image}/>
        <img src="https://hrphxfec.s3-us-west-1.amazonaws.com/Kanken+Laptop+13/kanken_autumn1.webp"/>
      </Flickity>
    </StyledCarousel>
  )
}

export default Carousel;