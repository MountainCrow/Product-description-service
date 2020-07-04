import React from 'react';
import styled from 'styled-components';
import CreateImageCell from './CreateImageCell.jsx';

//Creates thumbnail images for carousel - props are passed down from <Carousel/>
var SliderThumb = (props) => {
  //map through props images and set key/image for CreateImageCell component. ImageThumbnail will render below with returned images.
  const ImageThumbnail = props.product.map((imageSource, index) => (
    <CreateImageCell key={index} imageSource={imageSource}/>
  ))

  return(
    <div className='slider-thumb'>{ImageThumbnail}</div>
  )
}

export default SliderThumb;