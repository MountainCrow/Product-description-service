import React from 'react';
import styled from 'styled-components';

const StyledThumb = styled.img`
  width: 60px;
  height: 60px;
  padding: 5px;
  background: #e8e7e6;
`;

const CreateImageCell = (props) => {

  return(
    <StyledThumb src={props.imageSource}></StyledThumb>
  )
}

export default CreateImageCell;