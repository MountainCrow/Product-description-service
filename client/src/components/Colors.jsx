import React from 'react';
import CreateColorButton from './CreateColorButton.jsx';
import styled from 'styled-components';

const StyledLabel = styled.div`
  padding-bottom: 10px;
`;

const StyledButton = styled.div`
`;

var Colors = (props) => {

  const ColorButton = props.data.products.map((item, index) => (
    <CreateColorButton key={index} item={item} getCurrentProduct={props.getCurrentProduct} />
  ))

  return(
    <div>
      <StyledLabel>{props.data.currentProduct.color}</StyledLabel>
      <StyledButton>{ColorButton}</StyledButton>

    </div>
  )

}

export default Colors;