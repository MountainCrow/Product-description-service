import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => {
    const color = props.data;
    if (color === '215 - Autumn Leaf') {
      return 'rgb(171, 84, 26)'
    } else if (color === '662 - Deep Forest') {
      return 'rgb(52, 51, 25)'
    } else if (color === '031 - Graphite') {
      return 'rgb(37, 57, 56)'
    } else if (color === '540 - Royal Blue') {
      return 'rgb(38, 104, 177)'
    } else if (color === '550 - Black') {
      return 'rgb(0, 0, 0)'
    } else if (color === '660 - Forest Green') {
      return 'rgb(70, 74, 57)'
    } else if (color === '326 - Ox Red') {
      return 'rgb(136, 31, 43)'
    } else if (color === '620 - Green') {
      return 'rgb(109, 125, 89)'
    } else if (color === '420 - Plum') {
      return 'rgb(139, 28, 64)'
    } else if (color === '519 - Blue Ridge') {
      return 'rgb(95, 127, 152)'
    } else if (color === '046 - Super Grey') {
      return 'rgb(94, 102, 103)'
    } else if (color === '325-915 - Deep Red-Random Blocked') {
      return 'rgb(136, 31, 43)'
    } else if (color === '527 - Deep Blue') {
      return 'rgb(0, 63, 100)'
    } else if (color === '664-904 - Frost Green-Chess Pattern') {
      return 'rgb(113, 139, 136)'
    } else if (color === '166 - Acorn') {
      return 'rgb(197, 143, 39)'
    } else if (color === '307 - Dahlia') {
      return 'rgb(184, 75, 80)'
    } else if (color === '333 - Rowan Red') {
      return 'rgb(191, 75, 59)'
    } else if (color === '321 - Cabin Red') {
      return 'rgb(124, 52, 55)'
    } else if (color === '042 - Dusk') {
      return 'rgb(80, 80, 80)'
    } else if (color === '230 - Chestnut') {
      return 'rgb(122, 80, 42)'
    } else if (color === '638 - Storm') {
      return 'rgb(6, 41, 57)'
    } else if (color === '330 - Redwood') {
      return 'rgb(129, 22, 36)'
    } else if (color === '633 - Dark Olive') {
      return 'rgb(47, 42, 28)'
    } else if (color === '560 - Navy') {
      return 'rgb(0, 49, 62)'
    } else if (color === '277 - Dark Sand') {
      return 'rgb(136, 104, 66)'
    } else if (color === '616 - Pine Green') {
      return 'rgb(36, 93, 56)'
    } else if (color === '525 - UN Blue') {
      return 'rgb(0, 121, 192)'
    } else if (color === '220 - Sand') {
      return 'rgb(149, 128, 83)'
    } else if (color === '575 - Night Sky') {
      return 'rgb(28, 30, 41)'
    } else if (color === '555 - Dark Navy') {
      return 'rgb(13, 5, 28)'
    } else if (color === '563 - Clay Blue') {
      return 'rgb(109, 137, 148)'
    } else if (color === '032 - Mountain Grey') {
      return 'rgb(55, 57, 52)'
    } else if (color === '030-550 - Dark Grey-Black') {
      return 'rgb(51, 55, 49)'
    } else if (color === '520-030 - Uncle Blue-Dark Grey') {
      return 'rgb(0, 76, 105)'
    } else if (color === '160-046 - Ochre-Super Grey') {
      return 'rgb(205, 158, 38)'
    } else if (color === '342 - Raspberry Red') {
      return 'rgb(150, 54, 65)'
    } else if (color === '516 - Sage Green') {
      return 'rgb(105, 137, 127)'
    } else if (color === '356-420 - Dark Garnet-Plum') {
      return 'rgb(69, 29, 34)'
    } else if (color === '525-018 UN Blue-Stone Grey') {
      return 'rgb(0, 121, 192)'
    } else if (color === '555-520 - Dark Navy-Uncle Blue') {
      return 'rgb(13, 5, 28)'
    } else if (color === '662-625 - Deep Forest-Laurel Green') {
      return 'rgb(52, 51, 25)'
    } else if (color === '563-562 - Clay Blue-Mineral Blue') {
      return 'rgb(111, 140, 152)'
    } else if (color === '326-335 - Ox Red-Lava') {
      return 'rgb(136, 31, 43)'
    } else if (color === '356 - Dark Garnet') {
      return 'rgb(69, 29, 34)'
    } else if (color === '345 - Red Oak') {
      return 'rgb(102, 45, 42)'
    } else if (color === '625 - Laurel Green') {
      return 'rgb(82, 91, 75)'
    } else if (color === '664 - Frost Green') {
      return 'rgb(64, 122, 123)'
    } else if (color === '646 - Glacier Green') {
      return 'rgb(0, 70, 79)'
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
  <Button data={Color} onClick={() => props.getCurrentProduct(props.item)} onMouseEnter={() => props.colorHoverOn(Color)} onMouseLeave={props.colorHoverOff}></Button>
  )
}

export default CreateColorButton