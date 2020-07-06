import React from 'react'
import styled from 'styled-components'
import CreateImageCell from './CreateImageCell.jsx'

const StyledImageThumbnail = styled.div`
  background: #e8e7e6;
`;

//Creates thumbnail images for carousel - props are passed down from <Carousel/>
var SliderThumb = (props) => {
  //map through props images and set key/image for CreateImageCell component. ImageThumbnail will render below with returned images.
  const ImageThumbnail = props.product.images.map((imageSource, index) => (
    <CreateImageCell key={index} index={index} imageSource={imageSource} activeCell={props.product.activeSlide}/>
  ))

  return(
    <StyledImageThumbnail className='slider-thumb'>{ImageThumbnail}</StyledImageThumbnail>
  )
}

export default SliderThumb