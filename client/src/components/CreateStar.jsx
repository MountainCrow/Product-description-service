import React from 'react';
import {FaStar} from 'react-icons/fa';
import {FaStarHalf} from 'react-icons/fa';
import styled from 'styled-components';

// const StyledStar = styled.div`
//   color: ${props => {
//     const type =
//   }}

// `;

var CreateStar = (props) => {
  console.log(props)
  return(
  <div style={{color: 'rgb(204, 22, 24)'}}>{<FaStar/>}{<FaStarHalf/>}</div>
  )
}

export default CreateStar;