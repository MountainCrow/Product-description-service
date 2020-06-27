import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => {
    const color = props.data;
    console.log("COLORIZED", color)
    if (color === 'autumn') {
      return 'rgb(171, 84, 26)'
    } else if (color === 'deep_forest') {
      return 'rgb(52, 51, 25)'
    } else if (color === 'graphite') {
      return 'rgb(37, 57, 56)'
    } else if (color === 'royal_blue') {
      return 'rgb(38, 104, 177)'
    } else if (color === 'black') {
      return 'rgb(0, 0, 0)'
    } else if (color === 'forest_green') {
      return 'rgb(70, 74, 57)'
    } else if (color === 'ox_red') {
      return 'rgb(136, 31, 43)'
    } else if (color === 'green') {
      return 'rgb(109, 125, 89)'
    } else if (color === 'plum') {
      return 'rgb(139, 28, 64)'
    } else if (color === 'blue_ridge') {
      return 'rgb(95, 127, 152)'
    } else if (color === 'super_grey') {
      return 'rgb(94, 102, 103)'
    } else if (color === 'deep_red_random') {
      return 'rgb(136, 31, 43)'
    } else if (color === 'deep_blue') {
      return 'rgb(0, 63, 100)'
    } else if (color === 'frost_chess') {
      return 'rgb(113, 139, 136)'
    } else if (color === 'acorn') {
      return 'rgb(197, 143, 39)'
    } else if (color === 'dahlia') {
      return 'rgb(184, 75, 80)'
    } else if (color === 'rowan_red') {
      return 'rgb(191, 75, 59)'
    } else if (color === 'cabin_red') {
      return 'rgb(124, 52, 55)'
    } else if (color === 'dusk') {
      return 'rgb(80, 80, 80)'
    } else if (color === 'chestnut') {
      return 'rgb(122, 80, 42)'
    } else if (color === 'storm') {
      return 'rgb(6, 41, 57)'
    } else if (color === 'redwood') {
      return 'rgb(129, 22, 36)'
    } else if (color === 'dark_olive') {
      return 'rgb(47, 42, 28)'
    } else if (color === 'navy') {
      return 'rgb(0, 49, 62)'
    } else if (color === 'dark_sand') {
      return 'rgb(136, 104, 66)'
    } else if (color === 'pine_green') {
      return 'rgb(36, 93, 56)'
    } else if (color === 'un_blue') {
      return 'rgb(0, 121, 192)'
    } else if (color === 'sand') {
      return 'rgb(149, 128, 83)'
    } else if (color === 'night_sky') {
      return 'rgb(28, 30, 41)'
    } else if (color === 'dark_navy') {
      return 'rgb(13, 5, 28)'
    } else if (color === 'clay_blue') {
      return 'rgb(109, 137, 148)'
    } else if (color === 'mountain_grey') {
      return 'rgb(55, 57, 52)'
    } else if (color === 'dark_grey_black') {
      return 'rgb(51, 55, 49)'
    } else if (color === 'uncle_blue') {
      return 'rgb(0, 76, 105)'
    } else if (color === 'ochre') {
      return 'rgb(205, 158, 38)'
    }
  }};
  width: 2vs;
  height: 25px;
  padding: 25px;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: .2s ease-in-out;
`;

var CreateColorButton = (props) => {

  const Color = props.item.color;

  return(
      <Button data={Color} onClick={() => props.function(props.item)}></Button>
  )
}

export default CreateColorButton;