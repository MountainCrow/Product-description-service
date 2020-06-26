import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const StyledMenu = styled.select`
 width: 100%;
 padding: 10px 30px 10px 20px;
 border: 2px solid rgba(0, 0, 0, .15);
 background: #fff;
 border-radius: 2px;
 
`;

var SizeMenu = (props) => {

  console.log("SIZE: ", props)

  return(
    <Wrapper>
      <StyledMenu>
        <option value={props.data.size}>{props.data.size}</option>
      </StyledMenu>
    </Wrapper>
  )

  /*use when refactored size propery is refactored into an array

  return (
    {props.data.size.map((item, index) => {
      return (
        <option key={index} value={item.size}>{item.size}</option>
      )
    }}
  )*/
}


export default SizeMenu;