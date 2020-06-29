import React from 'react';
import styled from 'styled-components';
import CreateImageCell from './CreateImageCell.jsx';

var SliderThumb = (props) => {

  console.log("SLIDER: ", props.product.currentProduct.image)

  const ImageThumbnail = props.product.currentProduct.image.map((imageSource, index) => (
    <CreateImageCell key={index} imageSource={imageSource}/>
  ))

  return(
    <div>{ImageThumbnail}</div>
  )
}

export default SliderThumb;