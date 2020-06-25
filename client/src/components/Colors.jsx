import React from 'react';
import CreateColorButton from './CreateColorButton.jsx';
import styled from 'styled-components';

const StyledLabel = styled.div`
  padding-bottom: 10px;
`;

const StyledButton = styled.div`
`;

var Colors = (props) => {
  console.log("COLORS: ", props.data)

  const ColorButton = props.data.map((item, index) => (
    <CreateColorButton key={index} item={item}/>
  ))

  return(
    <div>
      <StyledLabel>166 - Acorn</StyledLabel>
      <StyledButton>{ColorButton}</StyledButton>
    </div>

  )
}

export default Colors;