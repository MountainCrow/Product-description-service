import React from 'react';
import styled from 'styled-components';
import CreateImageCell from './CreateImageCell.jsx';

var SliderThumb = (props) => {

  const ImageThumbnail = props.product.map((imageSource, index) => (
    <CreateImageCell key={index} imageSource={imageSource}/>
  ))

  return(
    <div className='slider-thumb'>{ImageThumbnail}</div>
  )
}

export default SliderThumb;