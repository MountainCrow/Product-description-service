import React from 'react';
import {FaStar} from 'react-icons/fa';
import {FaStarHalfAlt} from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTotal = styled.span`
  padding-bottom: 4px;
  padding-left: 5px;
`;

var StarRating = (props) => {

  const solidStar = Math.floor(props.data.rating)
  console.log("solidStar:" , solidStar)

  const hasHalfStar = false;
  if (solidStar < props.data.rating) {
    hasHalfStar = true;
  }

  return(
    <Wrapper>
      <label>
        {[...Array(5)].map((star, index) => {
          if (index < solidStar) {
            return(
              <FaStar key={index} style={{color: '#cc1618'}}/>
            )
          } else if (hasHalfStar && index < 5) {
            return (
              <FaStarHalfAlt key={index} style={{color: '#cc1618'}}/>
            )
          } else if (index < 5) {
            return (
              <FaStar key={index} style={{color: '#959595'}}/>
            )
          }
        })}
      </label>
      <StyledTotal>(6)</StyledTotal>
    </Wrapper>
  )
}

export default StarRating;