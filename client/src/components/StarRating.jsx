import React from 'react';
import {FaStar} from 'react-icons/fa';
import {FaStarHalfAlt} from 'react-icons/fa';
import styled from 'styled-components';

var StarRating = (props) => {

  const solidStar = Math.floor(props.data.rating)
  console.log("solidStar:" , solidStar)

  const hasHalfStar = false;
  if (solidStar < props.data.rating) {
    hasHalfStar = true;
  }

  return(
    <div>
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
    </div>
  )
}

export default StarRating;