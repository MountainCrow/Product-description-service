import React from 'react';
import CreateStar from './CreateStar.jsx';
import styled from 'styled-components';

var StarRating = (props) => {

  const Result = () => {
    for (let i = 0; i < props.data; i++) {
      <CreateStar key={i} data={'FaStar'}/>
    }
  }

  return(
    <div>{Result}</div>
  )
}

export default StarRating;