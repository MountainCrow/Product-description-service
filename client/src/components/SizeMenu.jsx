import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.select`
 width: 250px;
 padding: 15px 30px 15px 20px;
 border: 2px solid rgba(0, 0, 0, .15);
 background: #fff;
 border-radius: 2px;
 color: #707070;
 font-family: 'M PLUS Rounded 1c';
 font-size: 16px;
 font-weight: 400;
 margin-bottom: 5px;
`;
//Creates dropdown size menu using <select> and <option> tags
var SizeMenu = (props) => {

  let oneSize = null;

  if (props.data.size[0] === 'One Size') {
    oneSize = 'One Size'
  }
  //Determines placeholder value for dropdown menu.
  let placeholderValue = oneSize || 'Select a Size'
  //map through array of props size property and renders to dropdown menu
  const ItemSize = props.data.size.map((item, index) => (
    <option key={index}>{item}</option>
  ))

  return(
    <div>
      <StyledMenu>
        <option className='placeholder' defaultValue={placeholderValue} hidden>{placeholderValue}</option>
        {ItemSize}
      </StyledMenu>
    </div>
  )
}

export default SizeMenu