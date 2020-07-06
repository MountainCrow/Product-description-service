import React from 'react'
import {FaStar} from 'react-icons/fa'
import {FaStarHalfAlt} from 'react-icons/fa'
import styled from 'styled-components'

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
//takes an integer as an argument and generates a star rating from props passed down from <Price_Block/>
var StarRating = (props) => {

  const solidStar = Math.floor(props.data.rating)

  let hasHalfStar = false;
  if (solidStar < props.data.rating) {
    hasHalfStar = true;
  }

  return(
    <Wrapper>
      <StyledLabel className="star-rating">
        {[...Array(5)].map((star, index) => { // map through an array of length 5
          if (index < solidStar) { //return a full red star if the current index is less than solidStar
            return(
              <FaStar key={index} style={{color: '#cc1618'}}/>
            )
          } else if (index === solidStar && hasHalfStar === true && index < 5) { //return a half red star if the index is equal to solidStar but less than 5. hasHalfStar must also be true, which indicates that a halfStar has not been used yet.
            hasHalfStar = false; //hasHalfStar is now set to false to ensure that no new halfstars are returned
            return (
              <FaStarHalfAlt key={index} style={{color: '#cc1618', background: '#f4f4f4'}}/>
            )
          } else if (index >= solidStar && hasHalfStar === false && index < 5) { //return empty stars if the above conditions have been met and the index is still less that 5
            return (
              <FaStar key={index} style={{color: '#959595'}}/>
            )
          }
        })}
      </StyledLabel>
      <StyledTotal className="total-ratings">({props.data.totalRatings})</StyledTotal>
    </Wrapper>
  )
}

export default StarRating