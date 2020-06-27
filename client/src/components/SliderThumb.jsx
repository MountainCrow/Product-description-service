import React from 'react';
import styled from 'styled-components';

const StyledThumb = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
  background: #e8e7e6;
`;

var SliderThumb = (props) => {

  console.log("SLIDER: ", props)

  return(
    <StyledThumb src={props.product.currentProduct.image[0]}/>
  )
}

export default SliderThumb;