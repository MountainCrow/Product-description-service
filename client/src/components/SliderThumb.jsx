import React from 'react';

var SliderThumb = (props) => {

  return(
    <div >
      <img border='1px black solid' margin='10px grey' padding='0px' width='40px' height="40px" id="slider-thumb" src={props.image}/>
    </div>

  )
}

export default SliderThumb;