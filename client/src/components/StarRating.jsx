import React from 'react';
import {FaStar} from 'react-icons/fa';
import {FaStarHalfAlt} from 'react-icons/fa';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding-bottom: 5px;
`;

const StyledLabel = styled.label`
  padding-bottom: 14px;
`;

const StyledTotal = styled.span`
  padding-bottom: 17px;
  padding-left: 5px;
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #303030;
`;

var StarRating = (props) => {

  const solidStar = Math.floor(props.data.rating)

  let hasHalfStar = false;
  if (solidStar < props.data.rating) {
    hasHalfStar = true;
  }

  return(
    <Wrapper>
      <StyledLabel>
        {[...Array(5)].map((star, index) => {
          if (index < solidStar) {
            return(
              <FaStar key={index} style={{color: '#cc1618'}}/>
            )
          } else if (index === solidStar && hasHalfStar === true && index < 5) {
            hasHalfStar = false;
            return (
              <FaStarHalfAlt key={index} style={{color: '#cc1618', background: '#f4f4f4'}}/>
            )
          } else if (index >= solidStar && hasHalfStar === false && index < 5) {
            return (
              <FaStar key={index} style={{color: '#959595'}}/>
            )
          }
        })}
      </StyledLabel>
      <StyledTotal>({props.data.totalRatings})</StyledTotal>
    </Wrapper>
  )
}

export default StarRating;